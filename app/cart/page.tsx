"use client";

import { useCart } from "./store";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ items: cart }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: 80, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: 36, fontWeight: 300, marginBottom: 40 }}>Shopping Cart</h1>

      {cart.length === 0 && <p style={{ fontSize: 18 }}>Your cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
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
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
            <h3 style={{ fontSize: 20, fontWeight: 400 }}>{item.name}</h3>
            <p style={{ fontSize: 18, fontWeight: 300 }}>¥{item.price}</p>

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                style={{
                  width: 32,
                  height: 32,
                  border: "1px solid #ccc",
                  borderRadius: 6,
                  background: "white",
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                −
              </button>
              <span style={{ fontSize: 16, minWidth: 24, textAlign: "center" }}>
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                style={{
                  width: 32,
                  height: 32,
                  border: "1px solid #ccc",
                  borderRadius: 6,
                  background: "white",
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginLeft: 20,
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: 6,
                  background: "#f5f5f5",
                  color: "#c0392b",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                削除
              </button>
            </div>
          </div>

          <p style={{ fontSize: 18, fontWeight: 400, minWidth: 100, textAlign: "right" }}>
            ¥{(item.price * item.quantity).toLocaleString()}
          </p>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <div
            style={{
              borderTop: "1px solid #eee",
              paddingTop: 30,
              marginTop: 20,
              display: "flex",
              justifyContent: "flex-end",
              gap: 20,
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 300 }}>合計</span>
            <span style={{ fontSize: 24, fontWeight: 400 }}>¥{total.toLocaleString()}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
          </div>
        </>
      )}
    </div>
  );
}