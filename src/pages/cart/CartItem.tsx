import type { Cart } from '../../types'
const CartItem = ({ carts, setCart, setQuantity }: { carts: Cart[], setCart: (cart: Cart) => void, setQuantity: (quantity: number) => void }) => {

  const removeCart = (id: string) => {
    setCart(prev =>
      prev.filter(cart => String(cart.id) !== id)
    )
  }

  return (
    <div className='py-10 w-10/12 mx-auto grid gap-10'>

      {carts.map(cart =>
        <article className='md:grid md:grid-cols-[150px_150px_50px_1fr] gap-4 md:justify-between md:items-start'>
          <img src={cart.image} alt="" className='h-30 w-30 rounded-xl object-cover mb-3' />
          <div className=' flex flex-col gap-2'>
            <h3 className='capitalize font-medium'>{cart.name}</h3>
            <h4 className='text-base-300 font-medium'>{cart.company}</h4>
            <p className='flex items-center gap-3'>Color: <button type='button' className='badge badge-sm' style={{ backgroundColor: cart.color }} /></p>
          </div>
          <div className='pb-3 flex flex-col gap-2 items-start'>
            <label htmlFor="amount">Amount</label>
            <select
            onChange={e => setQuantity(parseInt(e.target.value))}
            value={cart.quantity}
            name="amount" id="amount" className='select select-sm'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <button
            onClick={() => removeCart(cart.id)}
            className='text-primary hover:underline cursor-pointer'>remove</button>
          </div>

          <p className='font-medium md:text-end'>${cart.price}</p>
        </article>
      )}
    </div>
  )
}

export default CartItem
