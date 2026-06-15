"use client";

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap');

        .km-contact-root {
          font-family: 'Inter', sans-serif;
          background: #FAFAF8;
          color: #1A1A1A;
          min-height: 100vh;
        }

        /* HERO */
        .km-contact-hero {
          padding: 160px 60px 80px;
          border-bottom: 1px solid #E8E4DF;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
        }
        .km-contact-eyebrow {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 20px;
        }
        .km-contact-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 300;
          letter-spacing: 0.04em;
          line-height: 1.05;
          margin: 0;
        }
        .km-contact-hero-desc {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.9;
          color: #666;
          max-width: 400px;
          align-self: end;
        }

        /* LAYOUT */
        .km-contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          padding: 80px 60px 120px;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* INFO */
        .km-contact-info {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .km-contact-info-block {
          border-top: 1px solid #E8E4DF;
          padding-top: 28px;
        }
        .km-contact-info-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #B8956A;
          margin-bottom: 12px;
        }
        .km-contact-info-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 300;
          letter-spacing: 0.03em;
          margin-bottom: 6px;
        }
        .km-contact-info-note {
          font-size: 13px;
          font-weight: 300;
          color: #999;
          line-height: 1.6;
        }

        /* FORM */
        .km-contact-form {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .km-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .km-form-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #999;
        }
        .km-form-input,
        .km-form-textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid #E8E4DF;
          padding: 12px 0;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: #1A1A1A;
          outline: none;
          transition: border-color 0.3s;
          width: 100%;
        }
        .km-form-input:focus,
        .km-form-textarea:focus {
          border-bottom-color: #B8956A;
        }
        .km-form-textarea {
          resize: none;
          height: 120px;
          line-height: 1.7;
        }
        .km-form-input::placeholder,
        .km-form-textarea::placeholder {
          color: #CCC;
          font-weight: 300;
        }
        .km-form-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: #1A1A1A;
          color: #FAFAF8;
          border: none;
          padding: 18px 48px;
          cursor: pointer;
          transition: background 0.3s;
          align-self: flex-start;
        }
        .km-form-submit:hover {
          background: #B8956A;
        }

        @media (max-width: 900px) {
          .km-contact-hero {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 130px 24px 60px;
          }
          .km-contact-layout {
            grid-template-columns: 1fr;
            gap: 60px;
            padding: 60px 24px 80px;
          }
        }
      `}</style>

      <div className="km-contact-root">

        {/* HERO */}
        <div className="km-contact-hero">
          <div>
            <p className="km-contact-eyebrow">Get in Touch</p>
            <h1 className="km-contact-title">Contact</h1>
          </div>
          <p className="km-contact-hero-desc">
            For custom orders, sizing questions, or any inquiry — we'd love to hear from you. Every message is read personally and replied to within 2 business days.
          </p>
        </div>

        <div className="km-contact-layout">

          {/* INFO */}
          <div className="km-contact-info">
            <div className="km-contact-info-block">
              <p className="km-contact-info-label">Email</p>
              <p className="km-contact-info-value">kmjewelryjp@gmail.com</p>
              <p className="km-contact-info-note">通常2営業日以内にご返信いたします</p>
            </div>
            <div className="km-contact-info-block">
              <p className="km-contact-info-label">Custom Orders</p>
              <p className="km-contact-info-value">オーダーメイド承ります</p>
              <p className="km-contact-info-note">
                サイズ調整・素材変更・刻印など、<br />
                お気軽にご相談ください。
              </p>
            </div>
            <div className="km-contact-info-block">
              <p className="km-contact-info-label">Response Time</p>
              <p className="km-contact-info-value">2 Business Days</p>
              <p className="km-contact-info-note">土日祝日を除く平日にご対応いたします</p>
            </div>
          </div>

          {/* FORM */}
          <form
            className="km-contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="km-form-group">
              <label className="km-form-label">Name</label>
              <input
                type="text"
                className="km-form-input"
                placeholder="Your name"
              />
            </div>
            <div className="km-form-group">
              <label className="km-form-label">Email</label>
              <input
                type="email"
                className="km-form-input"
                placeholder="your@email.com"
              />
            </div>
            <div className="km-form-group">
              <label className="km-form-label">Subject</label>
              <input
                type="text"
                className="km-form-input"
                placeholder="Custom order / General inquiry"
              />
            </div>
            <div className="km-form-group">
              <label className="km-form-label">Message</label>
              <textarea
                className="km-form-textarea"
                placeholder="Tell us about your inquiry..."
              />
            </div>
            <button type="submit" className="km-form-submit">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </>
  );
}
