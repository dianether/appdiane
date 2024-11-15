import React from 'react'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"

function Basket({ order, setCheckout }) {
  return (
    <span className='basket' onClick={() => setCheckout(true)}>
        <FontAwesomeIcon icon={faBasketShopping} />
        <p>
            {order.length}
        </p>
    </span>
  )
}

export default Basket