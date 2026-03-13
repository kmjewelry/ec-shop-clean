import { supabase } from '@/lib/supabase'
import ProductCard from '@/components/ProductCard'

export default async function ProductsPage() {

  const { data: products } = await supabase
    .from('products')
    .select('*')

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px",
      padding: "40px"
    }}>

      {products?.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}

    </div>
  )

}