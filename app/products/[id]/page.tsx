"use client";

import { useCart } from "@/app/cart/store";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const loadProduct = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("id", params.id)
        .single();
      setProduct(data);
    };
    loadProduct();
  }, []);

  if (!product) return <div style={{ padding: 60 }}>Loading...</div>;

  return (
    <div
      style={{
        padding: "80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
      }}
    >
      <img src={product.image_url} style={{ width: "100%" }} />

      <div>
        <h1>{product.name}</h1>
        <p style={{ fontSize: 24 }}>¥{product.price}</p>
        <p style={{ marginBottom: 40 }}>{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "14px 28px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}