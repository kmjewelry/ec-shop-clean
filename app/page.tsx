export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section
        style={{
          height: "70vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611652022419-a9419f74343d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            KM Jewelry
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "30px" }}>
            Fine Handmade Jewelry
          </p>

          <a
            href="/products"
            style={{
              background: "white",
              color: "black",
              padding: "12px 24px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section
        style={{
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          Collections
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          <a href="/collections/rings">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
              style={{ width: "100%" }}
            />
            <p>Rings</p>
          </a>

          <a href="/collections/necklaces">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
              style={{ width: "100%" }}
            />
            <p>Necklaces</p>
          </a>

          <a href="/collections/bracelets">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
              style={{ width: "100%" }}
            />
            <p>Bracelets</p>
          </a>

          <a href="/collections/earrings">
            <img
              src="https://images.unsplash.com/photo-1588444650700-6c2e8d4b0a3a"
              style={{ width: "100%" }}
            />
            <p>Earrings</p>
          </a>
        </div>
      </section>

      {/* STORY */}
      <section
        style={{
          padding: "80px 40px",
          textAlign: "center",
          background: "#f8f8f8",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Our Craft
        </h2>

        <p
          style={{
            maxWidth: "600px",
            margin: "auto",
            lineHeight: "1.6",
          }}
        >
          KM Jewelry creates timeless pieces crafted with passion and
          precision. Each design reflects elegance, craftsmanship,
          and individuality.
        </p>
      </section>

    </div>
  );
}