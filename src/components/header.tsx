import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CartWidget } from './cart-widget'

export function Header() {
  return (
    <div className="flex items-center  justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form
          action=""
          className="flex w-[320px] gap-3 items-center rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
        >
          <Search className="w-5 h-5 text-zinc-500" />

          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            type="text"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-2" />
        <Link href="/" className="flex items-center gap-2 hover:underlin">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/jaummsilva.png"
            className="h-6 w-6 rounded-full"
            height={24}
            width={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
