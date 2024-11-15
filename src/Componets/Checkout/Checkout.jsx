import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

function Checkout({ setCheckout, order }) {

  let totalPrice = 0;

  for (let i = 0; i < order.length; i++) {
    totalPrice = totalPrice + order[i].price;
  }

  return (
    <div className='checkout'>
        <div className='popup'>
            <span onClick={() => setCheckout(false)}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </span>
            <h1>Tu orden</h1>
            <div className='checkout-table'>
              {order.map((product) => (
                <div className='checkout-td'>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              ))} 
            </div>
            <div className='checkout-td'>
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
        </div>
    </div>
  )
}

export default Checkout