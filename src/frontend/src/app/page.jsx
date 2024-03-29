'use client'
import Image from 'next/image'
import ProductCard from '@/components/productCard/ProductCard'

import { useSession, getSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  console.log(session)
  console.log(status)
  return (
    <main className="flex flex-col min-h-screen pb-28">
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
