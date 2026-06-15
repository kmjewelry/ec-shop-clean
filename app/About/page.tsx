export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap');

        .km-about-root {
          font-family: 'Inter', sans-serif;
          background: #FAFAF8;
          color: #1A1A1A;
        }

        /* HERO */
        .km-about-hero {
          position: relative;
          height: 70vh;
          overflow: hidden;
        }
        .km-about-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.6);
        }
        .km-about-hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #FAFAF8;
          padding: 0 24px;
        }
        .km-about-eyebrow {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 20px;
        }
        .km-about-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300;
          letter-spacing: 0.06em;
          margin: 0;
          line-height: 1.1;
        }

        /* INTRO */
        .km-about-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding: 100px 60px;
          align-items: center;
        }
        .km-about-intro-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 300;
          letter-spacing: 0.04em;
          line-height: 1.2;
          margin: 0 0 8px;
        }
        .km-about-intro-heading em {
          font-style: italic;
          color: #B8956A;
        }
        .km-about-gold-line {
          width: 40px;
          height: 1px;
          background: #B8956A;
          margin: 24px 0;
        }
        .km-about-intro-body {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.9;
          color: #555;
        }
        .km-about-intro-img {
          aspect-ratio: 4/5;
          overflow: hidden;
        }
        .km-about-intro-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* VALUES */
        .km-about-values {
          background: #1A1A1A;
          color: #FAFAF8;
          padding: 100px 60px;
        }
        .km-about-values-header {
          text-align: center;
          margin-bottom: 72px;
        }
        .km-about-values-eyebrow {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 16px;
        }
        .km-about-values-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 300;
          letter-spacing: 0.04em;
          margin: 0;
        }
        .km-about-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }
        .km-about-value-item {
          border-top: 1px solid rgba(184,149,106,0.4);
          padding-top: 32px;
        }
        .km-about-value-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          color: #B8956A;
          letter-spacing: 0.2em;
          margin-bottom: 16px;
        }
        .km-about-value-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 0.04em;
          margin-bottom: 16px;
        }
        .km-about-value-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(250,250,248,0.55);
        }

        /* MAKER */
        .km-about-maker {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          min-height: 560px;
        }
        .km-about-maker-img {
          overflow: hidden;
        }
        .km-about-maker-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .km-about-maker-text {
          background: #F5F2EE;
          padding: 80px 72px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .km-about-maker-eyebrow {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 20px;
        }
        .km-about-maker-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 300;
          letter-spacing: 0.04em;
          line-height: 1.2;
          margin: 0 0 24px;
        }
        .km-about-maker-body {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.9;
          color: #555;
        }
        .km-about-maker-sig {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 22px;
          color: #B8956A;
          margin-top: 32px;
        }

        @media (max-width: 900px) {
          .km-about-intro { grid-template-columns: 1fr; gap: 40px; padding: 60px 24px; }
          .km-about-intro-img { order: -1; }
          .km-about-values { padding: 60px 24px; }
          .km-about-values-grid { grid-template-columns: 1fr; gap: 32px; }
          .km-about-maker { grid-template-columns: 1fr; }
          .km-about-maker-text { padding: 60px 32px; }
        }
      `}</style>

      <div className="km-about-root">

        {/* HERO */}
        <section className="km-about-hero">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800&q=80"
            alt="KM Jewelry Craft"
          />
          <div className="km-about-hero-content">
            <p className="km-about-eyebrow">Our Story</p>
            <h1 className="km-about-hero-title">About KM Jewelry</h1>
          </div>
        </section>

        {/* INTRO */}
        <section className="km-about-intro">
          <div>
            <h2 className="km-about-intro-heading">
              Jewelry made with<br /><em>intention</em>
            </h2>
            <div className="km-about-gold-line" />
            <p className="km-about-intro-body">
              KM Jewelry was born from a deep love of craft and a belief that the objects we wear every day should be beautiful, meaningful, and made to last. Each piece begins as a hand-drawn sketch and is shaped slowly, deliberately, into something timeless.
            </p>
            <p className="km-about-intro-body" style={{ marginTop: 20 }}>
              We work with 14K gold and sterling silver, sourced with care, and take pride in every detail — from the curve of a ring to the weight of a chain. Nothing leaves our hands until it feels exactly right.
            </p>
          </div>
          <div className="km-about-intro-img">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900&q=80"
              alt="KM Jewelry"
            />
          </div>
        </section>

        {/* VALUES */}
        <section className="km-about-values">
          <div className="km-about-values-header">
            <p className="km-about-values-eyebrow">What We Stand For</p>
            <h2 className="km-about-values-title">Our Philosophy</h2>
          </div>
          <div className="km-about-values-grid">
            {[
              {
                num: "01",
                title: "Craftsmanship",
                desc: "Every piece is shaped by hand, never mass-produced. We believe in slow making — taking the time to get it right.",
              },
              {
                num: "02",
                title: "Timeless Design",
                desc: "We design for longevity, not trends. Our pieces are meant to be worn for decades and passed down through generations.",
              },
              {
                num: "03",
                title: "Honest Materials",
                desc: "Only 14K gold and sterling silver. We source responsibly and never cut corners on the materials that touch your skin.",
              },
            ].map((v) => (
              <div key={v.num} className="km-about-value-item">
                <p className="km-about-value-num">{v.num}</p>
                <h3 className="km-about-value-title">{v.title}</h3>
                <p className="km-about-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MAKER */}
        <section className="km-about-maker">
          <div className="km-about-maker-img">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80"
              alt="The Maker"
            />
          </div>
          <div className="km-about-maker-text">
            <p className="km-about-maker-eyebrow">The Maker</p>
            <h2 className="km-about-maker-heading">
              村田 幸大郎
            </h2>
            <p className="km-about-maker-body">
              KM Jewelry is the work of one person — designed, shaped, and finished entirely by hand. I started making jewelry as a way to slow down and connect with something real. Every piece I make carries a piece of that intention.
            </p>
            <p className="km-about-maker-sig">— Kodairo Murata</p>
          </div>
        </section>

      </div>
    </>
  );
}
