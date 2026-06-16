"use client";

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
            alt="KM Jewelry"
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
              Jewelry that makes your<br /><em>everyday shine</em>
            </h2>
            <div className="km-about-gold-line" />
            <p className="km-about-intro-body">
              KM Jewelryは、日本からお届けするMade in Japanのジュエリーブランドです。世界最高峰の宝石学機関として知られるGIA（米国宝石学会）のGraduate Gemologist（GG）資格取得者が、品質と信頼を軸にセレクトした一品をお届けします。
            </p>
            <p className="km-about-intro-body" style={{ marginTop: 20 }}>
              「世の中の人の毎日を、少しでも輝かせたい」——そんな想いを胸に、日常に寄り添うジュエリーを丁寧にお届けしています。特別な日だけでなく、普段の自分をもっと好きになれるような、そんな一点をお探しの方へ。
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
                title: "GIA Certified Expertise",
                desc: "Every piece is curated by a GIA Graduate Gemologist — one of the most respected credentials in the world of fine jewelry. Quality you can trust.",
              },
              {
                num: "02",
                title: "Made in Japan",
                desc: "Rooted in Japan's tradition of precision and care, our jewelry meets the highest standards of craftsmanship and finish.",
              },
              {
                num: "03",
                title: "Everyday Brilliance",
                desc: "Designed not just for special occasions, but for the moments that make up your everyday life. Wear it. Feel it. Live in it.",
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
              alt="KM Jewelry"
            />
          </div>
          <div className="km-about-maker-text">
            <p className="km-about-maker-eyebrow">Our Commitment</p>
            <h2 className="km-about-maker-heading">
              確かな知識と、<br />誠実なものづくり
            </h2>
            <p className="km-about-maker-body">
              GIAのGraduate Gemologist（GG）は、ダイヤモンド・カラーストーン・真珠など、あらゆる宝石を科学的かつ国際的な基準で鑑別できる、世界が認める最高峰の資格です。
            </p>
            <p className="km-about-maker-body" style={{ marginTop: 16 }}>
              KM Jewelryは、その専門知識を活かし、品質に妥協しないジュエリーを日本からお届けします。あなたの大切な毎日に、本物の輝きを。
            </p>
            <p className="km-about-maker-sig">— KM Jewelry</p>
          </div>
        </section>

      </div>
    </>
  );
}