"use client";

import { useCart } from "@/app/cart/store";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!params.id) return;

    const loadProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", params.id)
        .single();
      if (error) {
        console.error("Supabase fetch error:", error.message);
      } else {
        setProduct(data);
      }
    };
    loadProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (!product) return <div style={{ padding: 60, fontFamily: "Arial, sans-serif" }}>Loading...</div>;

  return (
    <div
      style={{
        padding: "80px",
        display: "flex",
        flexDirection: "row",
        gap: "80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src={product.image_url}
        alt={product.name}
        style={{
          width: "50%",
          borderRadius: 16,
          objectFit: "cover",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}>
        <h1 style={{ fontSize: 36, fontWeight: 300 }}>{product.name}</h1>
        <p style={{ fontSize: 24, fontWeight: 300 }}>¥{product.price}</p>
        <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.6 }}>{product.description}</p>

        <button
          onClick={handleAddToCart}
          style={{
            marginTop: 40,
            padding: "16px 32px",
            background: added ? "#2e7d32" : "black",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer",
            width: "fit-content",
            transition: "background 0.3s, transform 0.2s",
            transform: added ? "scale(1.05)" : "scale(1)",
          }}
        >
          {added ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}