import Link from "next/link"

export default function ProductCard({ product }: any) {

  return (
    <Link href={`/products/${product.id}`}>
      <div style={{
        border: "1px solid #eee",
        padding: "20px",
        borderRadius: "10px"
      }}>

        <img src={product.image} width="200" />

        <h3>{product.name}</h3>

        <p>¥{product.price.toLocaleString()}</p>

      </div>
    </Link>
  )
}