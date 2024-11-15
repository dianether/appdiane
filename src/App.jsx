import { useState } from "react"
import Card from "./Componets/Card/Card"
import Layout from "./Componets/Layout/Layout"
import Checkout from "./Componets/Checkout/Checkout"
import Basket from "./Componets/Basket/Basket"

const recetas = [
  {
    name: 'Tostadita',
    price: 49,
    text: 'Crujiente pero jugosa, casi siempre con crema si tienes buen gusto, no la dejes sola o se vuelve blandita',
    orders: 0
  },
  {
    name: 'Taquito',
    price: 15,
    text: 'En la calle y no hay más, siempre listo, muy caliente',
    orders: 0
  },
  {
    name: 'Pozolito',
    price: 99,
    text: 'Abundante, obviamente repetir hasta que se acabe, con una lista grande de variables: limón, salsa, rabano, lechuga, maciza o cuerito. se adapta a ti',
    orders: 0
  }
]

function App() {

  const [checkout, setCheckout] = useState(false)
  const [order, setOrder] = useState([])

  return (
    <>
      {checkout && <Checkout setCheckout={setCheckout} order={order}/>}
      <Basket order={order} setCheckout={setCheckout}/>
      <Layout>
        <Card info={recetas[0]} setOrder={setOrder} order={order}/>
        <Card info={recetas[1]} setOrder={setOrder} order={order}/>
        <Card info={recetas[2]} setOrder={setOrder} order={order}/>
      </Layout>
    </>
  )
}

export default App
