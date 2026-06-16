"use client";

import Link from "next/link";
import { useEffect, useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

const CATEGORIES = [
  { label: "All", value: "" },
  { label: "Rings", value: "rings" },
  { label: "Necklaces", value: "necklaces" },
  { label: "Bracelets", value: "bracelets" },
  { label: "Earrings", value: "earrings" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  
  useEffect(() => {
   const category = searchParams.get("category") || "";
   setActiveCategory(category);
  }, [searchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Supabase fetch error:", error.message);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        p.name?.toLowerCase().includes(q) ||
        p.stone?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q);
      const matchesCategory =
        !activeCategory || p.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [products, query, activeCategory]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Inter:wght@300;400&display=swap');

        .km-products-root {
          font-family: 'Inter', sans-serif;
          background: #FAFAF8;
          color: #1A1A1A;
          min-height: 100vh;
        }
        .km-page-hero {
          padding: 140px 60px 60px;
          border-bottom: 1px solid #E8E4DF;
        }
        .km-page-eyebrow {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 16px;
        }
        .km-page-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 300;
          letter-spacing: 0.04em;
          margin: 0 0 16px;
          line-height: 1.1;
        }
        .km-page-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 18px;
          font-weight: 300;
          color: #888;
          margin: 0 0 40px;
        }
        .km-search-wrap {
          position: relative;
          max-width: 560px;
        }
        .km-search-icon {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          color: #B8956A;
          font-size: 16px;
          pointer-events: none;
        }
        .km-search-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #D4C9BE;
          padding: 12px 0 12px 28px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #1A1A1A;
          outline: none;
          transition: border-color 0.3s;
          box-sizing: border-box;
        }
        .km-search-input:focus { border-bottom-color: #B8956A; }
        .km-search-input::placeholder { color: #C0B8B0; font-weight: 300; }
        .km-filters {
          padding: 32px 60px;
          border-bottom: 1px solid #E8E4DF;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .km-filter-tab {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 20px;
          border: 1px solid #E8E4DF;
          background: transparent;
          color: #888;
          cursor: pointer;
          transition: all 0.2s;
        }
        .km-filter-tab:hover { border-color: #B8956A; color: #B8956A; }
        .km-filter-tab.active { background: #1A1A1A; border-color: #1A1A1A; color: #FAFAF8; }
        .km-results-count {
          font-size: 12px;
          font-weight: 300;
          color: #999;
          letter-spacing: 0.05em;
          padding: 24px 60px 0;
        }
        .km-products-section { padding: 40px 60px 120px; }
        .km-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px 32px;
        }
        .km-product-card {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
        }
        .km-product-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 3/4;
          background: #F0EDE8;
          margin-bottom: 20px;
        }
        .km-product-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .km-product-card:hover .km-product-img-wrap img { transform: scale(1.05); }
        .km-product-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26,26,26,0);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.4s;
        }
        .km-product-card:hover .km-product-overlay { background: rgba(26,26,26,0.18); }
        .km-product-view {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #FAFAF8;
          border: 1px solid rgba(250,250,248,0.8);
          padding: 12px 28px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s, transform 0.4s;
        }
        .km-product-card:hover .km-product-view { opacity: 1; transform: translateY(0); }
        .km-product-info {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }
        .km-product-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0.03em;
        }
        .km-product-price {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #666;
          white-space: nowrap;
        }
        .km-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 0;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 22px;
          color: #AAA;
          letter-spacing: 0.04em;
        }
        .km-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40vh;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 20px;
          color: #888;
          letter-spacing: 0.06em;
        }
        @media (max-width: 900px) {
          .km-products-grid { grid-template-columns: repeat(2, 1fr); }
          .km-page-hero { padding: 120px 24px 60px; }
          .km-filters { padding: 24px; }
          .km-results-count { padding: 20px 24px 0; }
          .km-products-section { padding: 32px 24px 80px; }
        }
        @media (max-width: 560px) {
          .km-products-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="km-products-root">
        <div className="km-page-hero">
          <p className="km-page-eyebrow">KM Jewelry</p>
          <h1 className="km-page-title">Our Collection</h1>
          <p className="km-page-sub">Fine jewelry for your everyday moments</p>
          <div className="km-search-wrap">
            <span className="km-search-icon">🔍</span>
            <input
              className="km-search-input"
              type="text"
              placeholder="商品名・石の名前で検索（例：ダイヤモンド、エメラルド）"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="km-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              className={`km-filter-tab${activeCategory === cat.value ? " active" : ""}`}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {!loading && (
          <p className="km-results-count">{filtered.length}件の商品</p>
        )}

        <section className="km-products-section">
          {loading ? (
            <div className="km-loading">Loading…</div>
          ) : (
            <div className="km-products-grid">
              {filtered.length === 0 ? (
                <p className="km-empty">該当する商品が見つかりませんでした</p>
              ) : (
                filtered.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="km-product-card"
                  >
                    <div className="km-product-img-wrap">
                      <img src={product.image_url} alt={product.name} />
                      <div className="km-product-overlay">
                        <span className="km-product-view">View Piece</span>
                      </div>
                    </div>
                    <div className="km-product-info">
                      <span className="km-product-name">{product.name}</span>
                      <span className="km-product-price">
                        ¥{product.price.toLocaleString()}
                        <span style={{ fontSize: 11, color: "#aaa" }}> (税込)</span>
                      </span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh", fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: 20, color: "#888" }}>Loading…</div>}>
      <ProductsContent />
    </Suspense>
  );
}