import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'

export async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    cache: 'force-cache',
  })
  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Produtos',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="col-span-6 row-span-6 relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center group"
      >
        <Image
          src={highlightedProduct.image}
          width={860}
          height={860}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/80 p-1 pl-4">
          <span className="text-sm truncate">{highlightedProduct.title} </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </Link>
      {otherProducts.map((product, index) => (
        <Link
          key={index} // Adicione uma chave única para cada elemento na iteração
          href={`/product/${product.slug}`}
          className="col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center group relative"
        >
          <Image
            src={product.image} // Use a imagem do produto a partir dos dados fornecidos
            width={430}
            height={430}
            quality={100}
            alt={product.title} // Use o nome do produto como texto alternativo
            className="group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/80 p-1 pl-4">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
