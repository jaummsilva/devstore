import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'

export interface SearchProps {
  searchParams: {
    q: string
  }
}

async function getProductsSearch(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await getProductsSearch(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para : <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Link
            key={index} // Adicione uma chave única para cada elemento na iteração
            href={`/product/${product.slug}`}
            className="rounded-lg bg-zinc-900 overflow-hidden flex justify-center group relative"
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
    </div>
  )
}
