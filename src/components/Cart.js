import React from 'react'
import RestroCard from './RestroCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'


const Cart = () => {
  const cartItems=useSelector(state=>state.cart.items)
  const dispatch=useDispatch()
  const clearHandle=()=>{
    dispatch(clearCart())
  }
  return (
    <div className='flex w-[100%] justify-center flex-col items-center'>
      <div>
        <button onClick={clearHandle} className='bg-black text-stone-500 p-2 font-bold hover:bg-white hover:text-black-50'>ClearItems</button>
      </div>
      {
        cartItems?.map((item)=>(
          <div key={item.id} className='flex justify-center'>
            <RestroCard key={item.id} data={item}/>
          </div>
        ))
      }
    </div>
  )
}

export default Cart
