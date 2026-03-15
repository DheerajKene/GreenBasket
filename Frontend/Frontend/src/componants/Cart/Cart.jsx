import React, { useState } from 'react'
import './Cart.css'

const Cart = () => {
  // Sample cart data - in real app, this would come from state management or API
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fresh Apples',
      category: 'Fruits',
      weight: '2 kg',
      price: 150,
      image: 'https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&h=220&P=0'
    },
    {
      id: 2,
      name: 'Organic Tomatoes',
      category: 'Vegetables',
      weight: '1 kg',
      price: 80,
      image: 'https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&h=220&P=0'
    },
    {
      id: 3,
      name: 'Fresh Milk',
      category: 'Dairy',
      weight: '1 liter',
      price: 60,
      image: 'https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&h=220&P=0'
    },
    {
      id: 4,
      name: 'Bananas',
      category: 'Fruits',
      weight: '6 nos',
      price: 45,
      image: 'https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&h=220&P=0'
    }
  ])

  const deleteItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const buyItem = (item) => {
    alert(`Buying ${item.name} for ₹${item.price}`)
    // Here you would implement the buy logic
  }

  const buyAll = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0)
    alert(`Buying all items for total ₹${total}`)
    // Here you would implement the buy all logic
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="category">{item.category}</p>
                  <p className="weight">Weight: {item.weight}</p>
                  <p className="price">₹{item.price}</p>
                </div>
                <div className="item-actions">
                  <button className="delete-btn" onClick={() => deleteItem(item.id)}>
                    Delete
                  </button>
                  <button className="buy-btn" onClick={() => buyItem(item)}>
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <div className="summary-details">
              <p>Total Items: {cartItems.length}</p>
              <p className="total-price">Total Price: ₹{totalPrice}</p>
            </div>
            <button className="buy-all-btn" onClick={buyAll}>
              Buy All Items
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart