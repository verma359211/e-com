interface CartSummaryProps {
  subtotal: number
  tax: number
  total: number
}

export default function CartSummary({ subtotal, tax, total }: CartSummaryProps) {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-xl">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

