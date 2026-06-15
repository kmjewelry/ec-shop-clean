"use client";

import Link from "next/link";
import { useCart } from "@/app/cart/store";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #eee",
      }}
    >
      <style>{`
        @keyframes cart-bounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.4); }
          100% { transform: scale(1); }
        }
      `}</style>

      <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
        KM Jewelry
      </Link>

      <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link href="/products" style={{ textDecoration: "none", color: "inherit" }}>
          Products
        </Link>
        <Link
          href="/cart"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Cart
          {cartCount > 0 && (
            <span
              key={cartCount}
              style={{
                marginLeft: 6,
                background: "black",
                color: "white",
                borderRadius: "999px",
                fontSize: 12,
                fontWeight: 600,
                minWidth: 20,
                height: 20,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 6px",
                animation: "cart-bounce 0.3s ease",
              }}
            >
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}