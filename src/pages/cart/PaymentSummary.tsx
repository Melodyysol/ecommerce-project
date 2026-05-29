
const PaymentSummary = () => {
  return (
    <div className="w-10/12 mx-auto py-15 md:py-10 flex flex-col gap-10">
      <div className="bg-base-200 px-10 pt-5 pb-10 md:pb-5 rounded-2xl">
        <p className="flex justify-between text-xs border-b border-base-300 py-3">
          <span>Subtotal</span>
          <span className="font-medium">$137.97</span>
        </p>

        <p className="flex justify-between text-xs border-b border-base-300 py-3">
          <span>Shipping</span>
          <span className="font-medium">$5.00</span>
        </p>

        <p className="flex justify-between text-xs border-b border-base-300 py-3">
          <span>Tax</span>
          <span className="font-medium">$13.80</span>
        </p>

        <p className="flex justify-between text-sm py-2 mt-5">
          <span>Order Total</span>
          <span className="font-medium">$156.77</span>
        </p>
      </div>

      <button className="btn btn-primary btn-md uppercase">please login</button>
    </div>
  )
}

export default PaymentSummary
