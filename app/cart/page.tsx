"use client";

import { useCart } from "./store";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div style={{ padding: "60px" }}>
      <h1 style={{ marginBottom: "40px" }}>Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <img src={item.image_url} width={80} />

          <div>
            <h3>{item.name}</h3>
            <p>¥{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}