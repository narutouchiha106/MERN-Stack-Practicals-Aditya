import { useState } from 'react'
import './App.css'
import projectVisual from './assets/project-visual.svg'

function HandicraftCard({ itemName, origin, price }) {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => count > 0 && setCount(count - 1)

  const handleOrder = () => {
    alert(count > 0 ? `Order placed for ${count} piece(s) of ${itemName}!` : 'Please select quantity first.')
  }

  return (
    <div className="product-card">
      <div className="product-top"><span>HANDCRAFT</span><span>₹{price}</span></div>
      <h2>{itemName}</h2>
      <p className="origin">Made in <strong>{origin}</strong></p>
      <div className="quantity-section">
        <button onClick={handleDecrement}>−</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p className="total-text">Total amount <strong>₹{price * count}</strong></p>
      <button className="cart-button" onClick={handleOrder}>Place Order</button>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <header>
        <img className="project-visual" src={projectVisual} alt="Indian handicraft illustration" />
        <p className="eyebrow">REACT PROPS • STATE • EVENTS</p>
        <h1>Indian Handicraft Store</h1>
        <p className="subtitle">Select quantity and place an order for your favourite craft.</p><p className="prepared-by">Prepared by Aditya</p>
      </header>
      <div className="product-container">
        <HandicraftCard
  name="Madhubani Painting"
  price={1200}
  origin="Bihar"
/>

<HandicraftCard
  name="Channapatna Wooden Toys"
  price={650}
  origin="Karnataka"
/>

<HandicraftCard
  name="Dokra Art Statue"
  price={1850}
  origin="Chhattisgarh"
/>
      </div>
    </div>
  )
}

export default App
