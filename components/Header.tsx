"use client";

import Link from "next/link";
import { useCart } from "@/app/cart/store";
import { useEffect, useState } from "react";

export default function Header() {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
          z-index: 110;
          position: relative;
        }
        .km-header.scrolled .km-logo { color: #1A1A1A; }
        .km-header.menu-open .km-logo { color: #1A1A1A; }

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
        .km-header.scrolled .km-nav-link { color: #1A1A1A; }
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
        .km-nav-link:hover::after { transform: scaleX(1); }
        .km-nav-link:hover { color: #B8956A; }
        .km-header.scrolled .km-nav-link:hover { color: #B8956A; }

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
        .km-header.scrolled .km-cart-link { color: #1A1A1A; }
        .km-cart-link:hover { color: #B8956A; }

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

        .km-header-spacer { height: 72px; }

        .km-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 110;
          position: relative;
          padding: 4px;
        }
        .km-hamburger span {
          display: block;
          width: 22px;
          height: 1px;
          background: #FAFAF8;
          transition: background 0.4s, transform 0.3s, opacity 0.3s;
        }
        .km-header.scrolled .km-hamburger span { background: #1A1A1A; }
        .km-header.menu-open .km-hamburger span { background: #1A1A1A; }
        .km-hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .km-hamburger.open span:nth-child(2) { opacity: 0; }
        .km-hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        .km-mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 105;
          background: rgba(250, 250, 248, 0.98);
          backdrop-filter: blur(16px);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .km-mobile-menu.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* ✕ 閉じるボタン */
        .km-mobile-close {
          position: absolute;
          top: 20px;
          right: 24px;
          width: 44px;
          height: 44px;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A1A1A;
          transition: color 0.3s;
        }
        .km-mobile-close:hover { color: #B8956A; }
        .km-mobile-close svg {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          stroke-width: 1.5;
        }

        .km-mobile-nav-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          letter-spacing: 0.14em;
          text-decoration: none;
          color: #1A1A1A;
          transition: color 0.3s;
        }
        .km-mobile-nav-link:hover { color: #B8956A; }

        /* ✅ Cartも他と同じCormorant Garamondの32pxに統一 */
        .km-mobile-cart-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          letter-spacing: 0.14em;
          text-decoration: none;
          color: #1A1A1A;
          transition: color 0.3s;
        }
        .km-mobile-cart-link:hover { color: #B8956A; }

        @media (max-width: 768px) {
          .km-header { padding: 0 24px; }
          .km-nav { display: none; }
          .km-hamburger { display: flex; }
          .km-mobile-menu { display: flex; }
        }
      `}</style>

      <header className={`km-header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
        <Link href="/" className="km-logo" onClick={() => setMenuOpen(false)}>
          KM Jewelry
        </Link>

        <nav className="km-nav">
          <Link href="/products" className="km-nav-link">Products</Link>
          <Link href="/about" className="km-nav-link">About</Link>
          <Link href="/contact" className="km-nav-link">Contact</Link>
          <Link href="/cart" className="km-cart-link">
            Cart
            {cartCount > 0 && (
              <span key={cartCount} className="km-cart-badge">{cartCount}</span>
            )}
          </Link>
        </nav>

        <button
          className={`km-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(true)}
          aria-label="メニューを開く"
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`km-mobile-menu${menuOpen ? " open" : ""}`}>
        {/* ✅ ✕ 閉じるボタン */}
        <button
          className="km-mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="メニューを閉じる"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>

        <Link href="/products" className="km-mobile-nav-link" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link href="/about" className="km-mobile-nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/contact" className="km-mobile-nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link href="/cart" className="km-mobile-cart-link" onClick={() => setMenuOpen(false)}>
          Cart
          {cartCount > 0 && (
            <span key={cartCount} className="km-cart-badge">{cartCount}</span>
          )}
        </Link>
      </div>
    </>
  );
}