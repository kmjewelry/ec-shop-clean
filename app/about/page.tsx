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