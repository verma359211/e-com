import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ShoppingBag className="h-24 w-24 text-gray-400 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Your cart is empty!</h1>
      <p className="text-gray-600 mb-8">Looks like you haven&apos;t added any items to your cart yet.</p>
      <Button asChild>
        <Link href="/products">Start Shopping</Link>
      </Button>
    </div>
  )
}

