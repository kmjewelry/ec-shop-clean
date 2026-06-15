"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

        /* PAGE HEADER */
        .km-page-hero {
          padding: 140px 60px 80px;
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
          margin: 0;
        }

        /* GRID */
        .km-products-section {
          padding: 80px 60px 120px;
        }
        .km-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px 32px;
        }

        /* CARD */
        .km-product-card {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          gap: 0;
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
        .km-product-card:hover .km-product-img-wrap img {
          transform: scale(1.05);
        }
        .km-product-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26,26,26,0);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.4s;
        }
        .km-product-card:hover .km-product-overlay {
          background: rgba(26,26,26,0.18);
        }
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
        .km-product-card:hover .km-product-view {
          opacity: 1;
          transform: translateY(0);
        }

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

        /* LOADING */
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
          .km-products-section { padding: 60px 24px 80px; }
        }
        @media (max-width: 560px) {
          .km-products-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="km-products-root">

        {/* PAGE HEADER */}
        <div className="km-page-hero">
          <p className="km-page-eyebrow">KM Jewelry</p>
          <h1 className="km-page-title">Our Collection</h1>
          <p className="km-page-sub">Handcrafted pieces for the discerning eye</p>
        </div>

        {/* GRID */}
        <section className="km-products-section">
          {loading ? (
            <div className="km-loading">Loading…</div>
          ) : (
            <div className="km-products-grid">
              {products.map((product) => (
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
                    <span className="km-product-price">¥{product.price.toLocaleString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

      </div>
    </>
  );
}
