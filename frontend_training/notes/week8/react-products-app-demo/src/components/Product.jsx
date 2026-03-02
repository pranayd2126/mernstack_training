import React from 'react'
import { useLocation } from 'react-router-dom'


function Product() {
 
const {state} = useLocation()
  return (
    <div className='flex  flex-col sm:flex-row justify-between mt-14'> 
      <div className="w-2/5 mt-14">
        <img
          className="w-96 "
          src={state?.product?.image}
          alt={state.product.title}
        />
      </div>
      <div className="w-3/5 p-3 sm:p-10">
        <p className="text-2xl font-bold mb-10">{state?.product?.title}</p>
        <p className="mb-10">{state?.product?.description}</p>
        
        <p className="text-3xl mb-10">{state?.product?.price} $</p>
        <p className="text-2xl mb-10">{state?.product?.category}</p>
        <p className='text-yellow-500'> {state?.product?.rating?.rate} rating</p>
      </div>
    </div>
  );
}

export default Product
//  state management mena shareing the state acocss apliction and ctchive  sinc in state accores 