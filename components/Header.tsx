import Link from "next/link"

export default function Header() {

  return (

    <header style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      borderBottom: "1px solid #eee"
    }}>

      <Link href="/">
        <h2>KM JEWELRY</h2>
      </Link>

      <nav style={{
        display: "flex",
        gap: "20px"
      }}>

        <Link href="/products">Products</Link>

        <Link href="/collections">Collections</Link>

        <Link href="/about">About</Link>

        <Link href="/contact">Contact</Link>

      </nav>

    </header>

  )

}