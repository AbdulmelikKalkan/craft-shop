import Image from 'next/image'
import ProductCard from '@/components/productCard/ProductCard'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pb-4">
      <div>
        <Image src='/banner-clothes.jpg' className='w-full' width={960} height={600} alt='banner' />
      </div>
      <div>
        <h2>Home</h2>
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  )
}
