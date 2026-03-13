import { supabase } from "@/lib/supabase";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!product) {
    return <div style={{ padding: "60px" }}>Product not found</div>;
  }

  return (
    <div
      style={{
        padding: "80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
      }}
    >
      {/* 商品画像 */}
      <div>
        <img
          src={product.image_url}
          style={{
            width: "100%",
          }}
        />
      </div>

      {/* 商品情報 */}
      <div>
        <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
          {product.name}
        </h1>

        <p
          style={{
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          ¥{product.price}
        </p>

        <p
          style={{
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          {product.description}
        </p>

        <button
          style={{
            padding: "14px 28px",
            background: "black",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}