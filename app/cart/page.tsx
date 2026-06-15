"use client";

import { useCart } from "./store";

export default function CartPage() {
  const { cart } = useCart();

  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ items: cart }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div style={{ padding: 80, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: 36, fontWeight: 300, marginBottom: 40 }}>Shopping Cart</h1>

      {cart.length === 0 && <p style={{ fontSize: 18 }}>Your cart is empty</p>}

      {cart.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 40,
            marginBottom: 40,
            alignItems: "center",
          }}
        >
          <img
            src={item.image_url}
            width={120}
            style={{ borderRadius: 12, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h3 style={{ fontSize: 20, fontWeight: 400 }}>{item.name}</h3>
            <p style={{ fontSize: 18, fontWeight: 300 }}>¥{item.price}</p>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <button
          onClick={checkout}
          style={{
            padding: "16px 48px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 18,
            cursor: "pointer",
            marginTop: 40,
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}