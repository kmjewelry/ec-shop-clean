import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Inter:wght@300;400&display=swap');

        .km-footer {
          background: #111111;
          color: #FAFAF8;
          font-family: 'Inter', sans-serif;
        }

        /* TOP */
        .km-footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 60px;
          padding: 80px 60px 60px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .km-footer-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 300;
          letter-spacing: 0.12em;
          margin-bottom: 16px;
        }
        .km-footer-brand-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(250,250,248,0.45);
          max-width: 260px;
        }

        .km-footer-col-title {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 20px;
        }
        .km-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .km-footer-link {
          font-size: 13px;
          font-weight: 300;
          color: rgba(250,250,248,0.55);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.03em;
        }
        .km-footer-link:hover {
          color: #B8956A;
        }

        /* BOTTOM */
        .km-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 60px;
          gap: 20px;
        }
        .km-footer-copy {
          font-size: 11px;
          font-weight: 300;
          color: rgba(250,250,248,0.3);
          letter-spacing: 0.08em;
        }
        .km-footer-gold-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, #B8956A44, transparent);
          margin: 0 32px;
        }

        @media (max-width: 768px) {
          .km-footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 60px 24px 40px;
          }
          .km-footer-bottom {
            flex-direction: column;
            text-align: center;
            padding: 24px;
            gap: 12px;
          }
          .km-footer-gold-line { display: none; }
        }
      `}</style>

      <footer className="km-footer">
        <div className="km-footer-top">
          {/* BRAND */}
          <div>
            <p className="km-footer-brand-name">KM Jewelry</p>
            <p className="km-footer-brand-desc">
              Fine jewelry crafted with passion and precision. Each piece reflects elegance, craftsmanship, and individuality.
            </p>
          </div>

          {/* SHOP */}
          <div>
            <p className="km-footer-col-title">Shop</p>
            <div className="km-footer-links">
              <Link href="/products" className="km-footer-link">All Products</Link>
              <Link href="/collections/rings" className="km-footer-link">Rings</Link>
              <Link href="/collections/necklaces" className="km-footer-link">Necklaces</Link>
              <Link href="/collections/bracelets" className="km-footer-link">Bracelets</Link>
              <Link href="/collections/earrings" className="km-footer-link">Earrings</Link>
            </div>
          </div>

          {/* INFO */}
          <div>
            <p className="km-footer-col-title">Information</p>
            <div className="km-footer-links">
              <Link href="/about" className="km-footer-link">About</Link>
              <Link href="/contact" className="km-footer-link">Contact</Link>
              <Link href="/legal" className="km-footer-link">特定商取引法に基づく表記</Link>
              <Link href="/privacy" className="km-footer-link">プライバシーポリシー</Link>
              <Link href="/terms" className="km-footer-link">利用規約</Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="km-footer-bottom">
          <span className="km-footer-copy">© 2026 KM Jewelry. All rights reserved.</span>
          <div className="km-footer-gold-line" />
          <span className="km-footer-copy">Made in Japan</span>
        </div>
      </footer>
    </>
  );
}
