import { Header } from '@/components/header'
import { CartProvider } from '@/context/cart-context'

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CartProvider>
      <div className="mx-auto grid w-full max-w-[1600px] grid-row-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
