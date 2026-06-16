import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap');

        .km-notfound {
          font-family: 'Inter', sans-serif;
          background: #FAFAF8;
          color: #1A1A1A;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 24px;
        }
        .km-notfound-eyebrow {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 24px;
        }
        .km-notfound-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 300;
          letter-spacing: 0.04em;
          margin: 0 0 16px;
          line-height: 1;
        }
        .km-notfound-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(18px, 2.5vw, 24px);
          font-weight: 300;
          color: #999;
          margin-bottom: 48px;
        }
        .km-notfound-btn {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          color: #FAFAF8;
          background: #1A1A1A;
          padding: 14px 40px;
          transition: background 0.3s;
        }
        .km-notfound-btn:hover {
          background: #B8956A;
        }
      `}</style>

      <div className="km-notfound">
        <p className="km-notfound-eyebrow">Coming Soon</p>
        <h1 className="km-notfound-title">Coming Soon</h1>
        <p className="km-notfound-sub">このページは近日公開予定です</p>
        <Link href="/products" className="km-notfound-btn">
          View All Products
        </Link>
      </div>
    </>
  );
}
