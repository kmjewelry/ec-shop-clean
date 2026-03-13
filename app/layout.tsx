import Link from "next/link";
import { CartProvider } from "./cart/store";

export const metadata = {
  title: "KM Jewelry",
  description: "Fine Jewelry Collection",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        <CartProvider>
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 40px",
              borderBottom: "1px solid #eee",
            }}
          >
            <Link href="/">KM Jewelry</Link>

            <nav style={{ display: "flex", gap: "20px" }}>
              <Link href="/products">Products</Link>
              <Link href="/cart">Cart</Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer
            style={{
              marginTop: "80px",
              padding: "40px",
              borderTop: "1px solid #eee",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} KM Jewelry
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}