import React from 'react'
import './index.css'

function Card({ info, setOrder, order }) {

  const onCheckout = () => {
    console.log("Se agregó un " + info.name + " de precio: " + info.price)
    setOrder([...order, {
      name: info.name,
      price: info.price
    }])
  }

  return (
    <div className='card'>
      <h1>{info.name}</h1>
      <h3>${info.price}</h3>
      <p className='card-text'>{info.text}</p>
      <button onClick={() => onCheckout()}>Ordenar</button>
    </div>
  )
}

export default Card