"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Supabase fetch error:", error.message);
      } else {
        setProducts(data || []);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "80px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: 36, marginBottom: 60, fontWeight: 300 }}>Our Collection</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 40,
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              transition: "transform 0.2s",
            }}
          >
            <img
              src={product.image_url}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: 16,
                objectFit: "cover",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            />
            <h2 style={{ fontSize: 20, fontWeight: 400 }}>{product.name}</h2>
            <p style={{ fontSize: 18, fontWeight: 300 }}>¥{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}