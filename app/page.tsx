import Link from "next/link";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400&display=swap');

        .km-root {
          font-family: 'Inter', sans-serif;
          color: #1A1A1A;
          background: #FAFAF8;
        }

        /* HERO */
        .km-hero {
          position: relative;
          height: 92vh;
          overflow: hidden;
        }
        .km-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.72);
        }
        .km-hero-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #FAFAF8;
          padding: 0 24px;
        }
        .km-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 24px;
        }
        .km-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 8vw, 96px);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: 0.04em;
          margin: 0 0 20px;
        }
        .km-hero-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(18px, 2.5vw, 24px);
          font-weight: 300;
          letter-spacing: 0.06em;
          margin-bottom: 48px;
          opacity: 0.88;
        }
        .km-btn-primary {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          color: #FAFAF8;
          border: 1px solid rgba(250,250,248,0.6);
          padding: 14px 40px;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
        }
        .km-btn-primary:hover {
          background: #B8956A;
          border-color: #B8956A;
          color: #FAFAF8;
        }
        .km-hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(250,250,248,0.5);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .km-hero-scroll-line {
          width: 1px;
          height: 40px;
          background: rgba(250,250,248,0.3);
        }

        /* COLLECTIONS */
        .km-collections {
          padding: 120px 60px;
          background: #FAFAF8;
        }
        .km-section-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 64px;
        }
        .km-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 300;
          letter-spacing: 0.04em;
          margin: 0;
        }
        .km-section-line {
          flex: 1;
          height: 1px;
          background: #E8E4DF;
        }
        .km-collections-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
        }
        .km-collection-item {
          position: relative;
          overflow: hidden;
          aspect-ratio: 3/4;
          text-decoration: none;
          display: block;
        }
        .km-collection-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(0.78);
        }
        .km-collection-item:hover img {
          transform: scale(1.06);
        }
        .km-collection-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 24px 24px;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%);
          color: #FAFAF8;
        }
        .km-collection-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 4px;
        }
        .km-collection-cta {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #B8956A;
        }

        /* CRAFT / STORY */
        .km-craft {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
        }
        .km-craft-img-wrap {
          overflow: hidden;
        }
        .km-craft-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .km-craft-text {
          background: #1A1A1A;
          color: #FAFAF8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 72px;
        }
        .km-craft-text .km-eyebrow {
          color: #B8956A;
        }
        .km-craft-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: 0.03em;
          margin: 0 0 28px;
        }
        .km-craft-body {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.9;
          color: rgba(250,250,248,0.7);
          margin-bottom: 40px;
          max-width: 380px;
        }
        .km-btn-ghost {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          color: #B8956A;
          border-bottom: 1px solid #B8956A;
          padding-bottom: 4px;
          transition: opacity 0.2s;
        }
        .km-btn-ghost:hover {
          opacity: 0.7;
        }

        /* PROMISE */
        .km-promise {
          padding: 100px 60px;
          background: #FAFAF8;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
          border-top: 1px solid #E8E4DF;
        }
        .km-promise-item {
          text-align: center;
        }
        .km-promise-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          color: #B8956A;
          line-height: 1;
          margin-bottom: 16px;
        }
        .km-promise-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 12px;
          color: #1A1A1A;
        }
        .km-promise-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.7;
          color: #666;
        }

        @media (max-width: 768px) {
          .km-collections { padding: 80px 24px; }
          .km-collections-grid { grid-template-columns: repeat(2, 1fr); }
          .km-craft { grid-template-columns: 1fr; }
          .km-craft-text { padding: 60px 32px; }
          .km-promise { grid-template-columns: 1fr; padding: 60px 32px; gap: 40px; }
        }
      `}</style>

      <div className="km-root">

        {/* HERO */}
        <section className="km-hero">
          <img
            src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1800&q=80"
            alt="KM Jewelry"
            className="km-hero-img"
          />
          <div className="km-hero-content">
            <p className="km-eyebrow">Fine Jewelry — Made in Japan</p>
            <h1 className="km-hero-title">KM Jewelry</h1>
            <p className="km-hero-sub">Everyday Brilliance</p>
            <Link href="/products" className="km-btn-primary">
              Explore Collection
            </Link>
          </div>
          <div className="km-hero-scroll">
            <div className="km-hero-scroll-line" />
            <span>Scroll</span>
          </div>
        </section>

        {/* COLLECTIONS */}
        <section className="km-collections">
          <div className="km-section-header">
            <h2 className="km-section-title">Collections</h2>
            <div className="km-section-line" />
          </div>
          <div className="km-collections-grid">
            {[
              {
                href: "/collections/rings",
                label: "Rings",
                img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&q=80",
              },
              {
                href: "/collections/necklaces",
                label: "Necklaces",
                img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80",
              },
              {
                href: "/collections/bracelets",
                label: "Bracelets",
                img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
              },
              {
                href: "/collections/earrings",
                label: "Earrings",
                img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
              },
            ].map((c) => (
              <Link key={c.label} href={c.href} className="km-collection-item">
                <img src={c.img} alt={c.label} />
                <div className="km-collection-label">
                  <span className="km-collection-name">{c.label}</span>
                  <span className="km-collection-cta">Shop Now</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CRAFT */}
        <section className="km-craft">
          <div className="km-craft-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=1000&q=80"
              alt="Our Philosophy"
            />
          </div>
          <div className="km-craft-text">
            <p className="km-eyebrow">Our Philosophy</p>
            <h2 className="km-craft-heading">
              Curated with<br />Intention
            </h2>
            <p className="km-craft-body">
              Guided by the expertise of a GIA Graduate Gemologist, every piece at KM Jewelry is selected for its beauty, quality, and lasting value. Made in Japan, delivered with care — for the moments that matter most.
            </p>
            <Link href="/about" className="km-btn-ghost">
              Our Story
            </Link>
          </div>
        </section>

        {/* PROMISE */}
        <section className="km-promise">
          <div className="km-promise-item">
            <div className="km-promise-num">GIA</div>
            <div className="km-promise-label">Certified Expertise</div>
            <p className="km-promise-desc">Curated by a GIA Graduate Gemologist for quality you can trust.</p>
          </div>
          <div className="km-promise-item">
            <div className="km-promise-num">∞</div>
            <div className="km-promise-label">Timeless Design</div>
            <p className="km-promise-desc">Pieces made to be worn for a lifetime, not a season.</p>
          </div>
          <div className="km-promise-item">
            <div className="km-promise-num">JP</div>
            <div className="km-promise-label">Made in Japan</div>
            <p className="km-promise-desc">Rooted in Japan's tradition of precision, care, and refined beauty.</p>
          </div>
        </section>

      </div>
    </>
  );
}