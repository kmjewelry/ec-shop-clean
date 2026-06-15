import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "40px",
        background: "#111",
        color: "white",
        textAlign: "center",
      }}
    >
      <p>© 2026 KM Jewelry</p>

      <p style={{ marginBottom: "20px" }}>
        All rights reserved
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          fontSize: "14px",
        }}
      >
        <Link
          href="/legal"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          特定商取引法に基づく表記
        </Link>

        <Link
          href="/privacy"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          プライバシーポリシー
        </Link>

        <Link
          href="/terms"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          利用規約
        </Link>
      </div>
    </footer>
  );
}