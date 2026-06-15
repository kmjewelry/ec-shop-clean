"use client";

import { useCart } from "@/app/cart/store";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!params.id) return;
    const loadProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", params.id)
        .single();
      if (error) {
        console.error("Supabase fetch error:", error.message);
      } else {
        setProduct(data);
      }
    };
    loadProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap');

        .km-pd-root {
          font-family: 'Inter', sans-serif;
          background: #FAFAF8;
          color: #1A1A1A;
          min-height: 100vh;
        }

        /* BREADCRUMB */
        .km-breadcrumb {
          padding: 120px 60px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #999;
        }
        .km-breadcrumb a {
          color: #999;
          text-decoration: none;
          transition: color 0.2s;
        }
        .km-breadcrumb a:hover { color: #B8956A; }
        .km-breadcrumb-sep { color: #CCC; }

        /* LOADING */
        .km-pd-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60vh;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 22px;
          color: #888;
          letter-spacing: 0.06em;
        }

        /* LAYOUT */
        .km-pd-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding: 48px 60px 120px;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* IMAGE */
        .km-pd-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/5;
          background: #F0EDE8;
        }
        .km-pd-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* INFO */
        .km-pd-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 0;
        }
        .km-pd-eyebrow {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 20px;
        }
        .km-pd-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 300;
          letter-spacing: 0.03em;
          line-height: 1.1;
          margin: 0 0 24px;
        }
        .km-pd-divider {
          width: 40px;
          height: 1px;
          background: #B8956A;
          margin-bottom: 24px;
        }
        .km-pd-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 300;
          letter-spacing: 0.04em;
          color: #1A1A1A;
          margin-bottom: 32px;
        }
        .km-pd-desc {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.9;
          color: #555;
          margin-bottom: 48px;
        }

        /* ADD TO CART */
        .km-pd-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          padding: 18px 48px;
          width: 100%;
          max-width: 360px;
          transition: background 0.4s, transform 0.2s;
        }
        .km-pd-btn.idle {
          background: #1A1A1A;
          color: #FAFAF8;
        }
        .km-pd-btn.idle:hover {
          background: #B8956A;
        }
        .km-pd-btn.added {
          background: #2D6A4F;
          color: #FAFAF8;
          transform: scale(1.02);
        }

        /* DETAILS */
        .km-pd-details {
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid #E8E4DF;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .km-pd-detail-row {
          display: flex;
          gap: 16px;
          font-size: 13px;
        }
        .km-pd-detail-label {
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #999;
          min-width: 100px;
          font-size: 11px;
        }
        .km-pd-detail-val {
          font-weight: 300;
          color: #444;
        }

        @media (max-width: 900px) {
          .km-pd-layout {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 32px 24px 80px;
          }
          .km-breadcrumb { padding: 100px 24px 0; }
        }
      `}</style>

      <div className="km-pd-root">
        {/* BREADCRUMB */}
        <nav className="km-breadcrumb">
          <Link href="/">Home</Link>
          <span className="km-breadcrumb-sep">—</span>
          <Link href="/products">Collection</Link>
          {product && (
            <>
              <span className="km-breadcrumb-sep">—</span>
              <span style={{ color: "#1A1A1A" }}>{product.name}</span>
            </>
          )}
        </nav>

        {!product ? (
          <div className="km-pd-loading">Loading…</div>
        ) : (
          <div className="km-pd-layout">
            {/* IMAGE */}
            <div className="km-pd-img-wrap">
              <img src={product.image_url} alt={product.name} />
            </div>

            {/* INFO */}
            <div className="km-pd-info">
              <p className="km-pd-eyebrow">KM Jewelry</p>
              <h1 className="km-pd-name">{product.name}</h1>
              <div className="km-pd-divider" />
              <p className="km-pd-price">¥{product.price.toLocaleString()}</p>
              <p className="km-pd-desc">{product.description}</p>

              <button
                onClick={handleAddToCart}
                className={`km-pd-btn ${added ? "added" : "idle"}`}
              >
                {added ? "✓ Added to Cart" : "Add to Cart"}
              </button>

              {/* DETAILS */}
              <div className="km-pd-details">
                <div className="km-pd-detail-row">
                  <span className="km-pd-detail-label">Material</span>
                  <span className="km-pd-detail-val">14K Gold / Sterling Silver</span>
                </div>
                <div className="km-pd-detail-row">
                  <span className="km-pd-detail-label">Shipping</span>
                  <span className="km-pd-detail-val">3〜7営業日以内に発送</span>
                </div>
                <div className="km-pd-detail-row">
                  <span className="km-pd-detail-label">Returns</span>
                  <span className="km-pd-detail-val">不良品のみ返品対応</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
