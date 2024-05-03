'use client'

import { useCart } from '@/context/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      onClick={handleAddToCart}
      type="button"
      className="flex items-center justify-center mt-8 h-12 rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
