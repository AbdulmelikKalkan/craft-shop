import Image from 'next/image'
import ProductCard from '@/components/productCard/ProductCard'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen  bg-lime-500">
      <div>
        <Image src='/banner-clothes.jpg' className='w-full' width={960} height={600} alt='banner' />
      </div>
      <div>
        <h2>Home</h2>
      </div>
      <div>
        <ProductCard />
      </div>
    </main>
  )
}
