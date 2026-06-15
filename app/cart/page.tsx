"use client";

import { useCart } from "./store";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ items: cart }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Inter:wght@300;400&display=swap');

        .km-cart-root {
          font-family: 'Inter', sans-serif;
          background: #FAFAF8;
          color: #1A1A1A;
          min-height: 100vh;
        }

        /* HEADER */
        .km-cart-hero {
          padding: 140px 60px 60px;
          border-bottom: 1px solid #E8E4DF;
        }
        .km-cart-eyebrow {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 16px;
        }
        .km-cart-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 300;
          letter-spacing: 0.04em;
          margin: 0;
          line-height: 1.1;
        }

        /* LAYOUT */
        .km-cart-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 80px;
          padding: 60px 60px 120px;
          max-width: 1280px;
          margin: 0 auto;
          align-items: start;
        }

        /* EMPTY */
        .km-cart-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 100px 0;
          text-align: center;
          gap: 20px;
        }
        .km-cart-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 28px;
          font-weight: 300;
          color: #888;
        }
        .km-cart-empty-link {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1A1A1A;
          text-decoration: none;
          border-bottom: 1px solid #B8956A;
          padding-bottom: 3px;
          transition: color 0.2s;
        }
        .km-cart-empty-link:hover { color: #B8956A; }

        /* ITEMS */
        .km-cart-items {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .km-cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto;
          gap: 28px;
          align-items: center;
          padding: 28px 0;
          border-bottom: 1px solid #E8E4DF;
        }
        .km-cart-item:first-child {
          border-top: 1px solid #E8E4DF;
        }
        .km-cart-item-img {
          width: 100px;
          aspect-ratio: 3/4;
          object-fit: cover;
          background: #F0EDE8;
        }
        .km-cart-item-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .km-cart-item-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0.03em;
        }
        .km-cart-item-price {
          font-size: 13px;
          font-weight: 300;
          color: #888;
          letter-spacing: 0.05em;
        }
        .km-cart-qty {
          display: flex;
          align-items: center;
          gap: 0;
          margin-top: 12px;
          border: 1px solid #E8E4DF;
          width: fit-content;
        }
        .km-cart-qty-btn {
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 16px;
          color: #1A1A1A;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .km-cart-qty-btn:hover { background: #F0EDE8; }
        .km-cart-qty-num {
          width: 36px;
          text-align: center;
          font-size: 14px;
          font-weight: 300;
          border-left: 1px solid #E8E4DF;
          border-right: 1px solid #E8E4DF;
          line-height: 36px;
        }
        .km-cart-remove {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #BBB;
          margin-top: 10px;
          padding: 0;
          transition: color 0.2s;
        }
        .km-cart-remove:hover { color: #c0392b; }

        .km-cart-item-subtotal {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 300;
          text-align: right;
          white-space: nowrap;
        }

        /* SUMMARY */
        .km-cart-summary {
          background: #F5F2EE;
          padding: 40px;
          position: sticky;
          top: 100px;
        }
        .km-summary-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          letter-spacing: 0.04em;
          margin-bottom: 32px;
        }
        .km-summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 300;
          color: #666;
          margin-bottom: 14px;
        }
        .km-summary-divider {
          height: 1px;
          background: #E8E4DF;
          margin: 20px 0;
        }
        .km-summary-total {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 32px;
        }
        .km-summary-total-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1A1A1A;
        }
        .km-summary-total-amount {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 300;
        }
        .km-checkout-btn {
          width: 100%;
          padding: 18px;
          background: #1A1A1A;
          color: #FAFAF8;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: background 0.3s;
        }
        .km-checkout-btn:hover { background: #B8956A; }
        .km-summary-note {
          font-size: 11px;
          color: #AAA;
          text-align: center;
          margin-top: 16px;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .km-cart-layout {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 24px 80px;
          }
          .km-cart-hero { padding: 120px 24px 48px; }
        }
      `}</style>

      <div className="km-cart-root">
        <div className="km-cart-hero">
          <p className="km-cart-eyebrow">KM Jewelry</p>
          <h1 className="km-cart-title">Shopping Cart</h1>
        </div>

        <div className="km-cart-layout">
          {cart.length === 0 ? (
            <div className="km-cart-empty">
              <p className="km-cart-empty-title">Your cart is empty</p>
              <Link href="/products" className="km-cart-empty-link">
                Explore Collection
              </Link>
            </div>
          ) : (
            <>
              {/* ITEMS */}
              <div className="km-cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="km-cart-item">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="km-cart-item-img"
                    />
                    <div className="km-cart-item-info">
                      <span className="km-cart-item-name">{item.name}</span>
                      <span className="km-cart-item-price">¥{item.price.toLocaleString()}</span>
                      <div className="km-cart-qty">
                        <button
                          className="km-cart-qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="km-cart-qty-num">{item.quantity}</span>
                        <button
                          className="km-cart-qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="km-cart-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <span className="km-cart-item-subtotal">
                      ¥{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* SUMMARY */}
              <div className="km-cart-summary">
                <h2 className="km-summary-title">Order Summary</h2>
                {cart.map((item) => (
                  <div key={item.id} className="km-summary-row">
                    <span>{item.name} × {item.quantity}</span>
                    <span>¥{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="km-summary-row">
                  <span>送料</span>
                  <span>商品ページ記載</span>
                </div>
                <div className="km-summary-divider" />
                <div className="km-summary-total">
                  <span className="km-summary-total-label">合計</span>
                  <span className="km-summary-total-amount">¥{total.toLocaleString()}</span>
                </div>
                <button className="km-checkout-btn" onClick={checkout}>
                  Proceed to Checkout
                </button>
                <p className="km-summary-note">
                  クレジットカード決済（Stripe）<br />
                  SSL暗号化により安全に処理されます
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
