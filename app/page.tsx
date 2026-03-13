import Link from "next/link";

export default function Home() {

  return (
    <div style={{ padding: "40px" }}>

      <h1>KM Jewelry</h1>

      <p>Luxury Jewelry Collection</p>

      <Link href="/products">
        View Products
      </Link>

    </div>
  )

}