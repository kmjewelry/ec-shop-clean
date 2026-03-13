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
    <div style={{ padding: 60 }}>
      <h1>Cart</h1>

      {cart.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 20 }}>
          <img src={item.image_url} width={80} />
          <div>
            <h3>{item.name}</h3>
            <p>¥{item.price}</p>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <button
          onClick={checkout}
          style={{
            marginTop: 40,
            padding: "16px 32px",
            background: "black",
            color: "white",
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}