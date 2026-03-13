import Link from "next/link";

export const metadata = {
  title: "KM Jewelry",
  description: "Fine Jewelry Collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        {/* HEADER */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            borderBottom: "1px solid #eee",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <h2>KM Jewelry</h2>
          </Link>

          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/products">Products</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: "80px",
            padding: "40px",
            borderTop: "1px solid #eee",
            textAlign: "center",
            fontSize: "14px",
            color: "#666",
          }}
        >
          <p>© {new Date().getFullYear()} KM Jewelry</p>
        </footer>

      </body>
    </html>
  );
}