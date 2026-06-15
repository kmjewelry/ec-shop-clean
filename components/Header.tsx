"use client";

import Link from "next/link";
import { useCart } from "@/app/cart/store";
import { useEffect, useState } from "react";

export default function Header() {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Inter:wght@300;400&display=swap');

        @keyframes cart-bounce {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        .km-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 56px;
          height: 72px;
          transition: background 0.4s, box-shadow 0.4s, height 0.4s;
          background: transparent;
        }
        .km-header.scrolled {
          background: rgba(250, 250, 248, 0.96);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 #E8E4DF;
          height: 60px;
        }

        .km-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-decoration: none;
          color: #FAFAF8;
          transition: color 0.4s;
        }
        .km-header.scrolled .km-logo {
          color: #1A1A1A;
        }

        .km-nav {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .km-nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(250,250,248,0.85);
          position: relative;
          padding-bottom: 2px;
          transition: color 0.4s;
        }
        .km-header.scrolled .km-nav-link {
          color: #1A1A1A;
        }
        .km-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 1px;
          background: #B8956A;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .km-nav-link:hover::after {
          transform: scaleX(1);
        }
        .km-nav-link:hover {
          color: #B8956A;
        }
        .km-header.scrolled .km-nav-link:hover {
          color: #B8956A;
        }

        .km-cart-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(250,250,248,0.85);
          transition: color 0.4s;
        }
        .km-header.scrolled .km-cart-link {
          color: #1A1A1A;
        }
        .km-cart-link:hover {
          color: #B8956A;
        }

        .km-cart-badge {
          background: #B8956A;
          color: #FAFAF8;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 400;
          min-width: 18px;
          height: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 5px;
          animation: cart-bounce 0.3s ease;
        }

        /* ヒーロー直下のページでは余白を追加 */
        .km-header-spacer {
          height: 72px;
        }

        @media (max-width: 768px) {
          .km-header { padding: 0 24px; }
          .km-nav { gap: 24px; }
        }
      `}</style>

      <header className={`km-header${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="km-logo">
          KM Jewelry
        </Link>

        <nav className="km-nav">
          <Link href="/products" className="km-nav-link">
            Products
          </Link>
          <Link href="/about" className="km-nav-link">
            About
          </Link>
          <Link href="/contact" className="km-nav-link">
            Contact
          </Link>
          <Link href="/cart" className="km-cart-link">
            Cart
            {cartCount > 0 && (
              <span key={cartCount} className="km-cart-badge">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </header>
    </>
  );
}
