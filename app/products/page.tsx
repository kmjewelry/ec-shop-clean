import { supabase } from "@/lib/supabase";

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return <div>Failed to load products</div>;
  }

  return (
    <div style={{ padding: "60px" }}>
      <h1 style={{ marginBottom: "40px" }}>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px",
        }}
      >
        {products?.map((product) => (
          <a
            key={product.id}
            href={`/products/${product.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <img
                src={product.image_url}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                }}
              />

              <h3>{product.name}</h3>

              <p>¥{product.price}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}