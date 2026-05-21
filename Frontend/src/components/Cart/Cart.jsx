import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cart.css'

const Cart = ({ initialItems }) => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState({ show: false, message: '' })

  // Fetch cart items from database
  useEffect(() => {
    fetchCartItems()
  }, [])

  const fetchCartItems = async () => {
    try {
      // const token = localStorage.getItem('token')
      // if (!token) {
      //   navigate('/login')
      //   return
      // }

      const response = await fetch('https://greenbasket-59xb.onrender.com/cart/items', {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        const data = await response.json()
        setCartItems(data.cartItems)
      } else if (response.status === 401) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Error fetching cart items:', error)
      showToast('Error loading cart')
    } finally {
      setLoading(false)
    }
  }

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => {
      setToast({ show: false, message: '' })
    }, 3000)
  }

  const deleteItem = async (cartItemId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`https://greenbasket-59xb.onrender.com/cart/remove/${cartItemId}`, {
        method: 'DELETE',
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        setCartItems(cartItems.filter(item => item._id !== cartItemId))
        showToast('Item removed from cart')
      } else {
        showToast('Error removing item')
      }
    } catch (error) {
      console.error('Error deleting item:', error)
      showToast('Error removing item')
    }
  }

  const updateQuantity = async (cartItemId, newQuantity) => {
    if (newQuantity < 1) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`https://greenbasket-59xb.onrender.com/cart/update/${cartItemId}`, {
        method: 'PUT',
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity: newQuantity })
      })

      if (response.ok) {
        fetchCartItems()
        showToast('Quantity updated')
      } else {
        showToast('Error updating quantity')
      }
    } catch (error) {
      console.error('Error updating quantity:', error)
      showToast('Error updating quantity')
    }
  }

  const buyItem = (item) => {
    alert(`Buying ${item.name} for ₹${item.price}`)
  }

  const buyAll = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    alert(`Buying all items for total ₹${total}`)
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      
      {toast.show && (
        <div className="toast-notification">
          {toast.message}
        </div>
      )}

      {loading ? (
        <div className="loading">Loading cart...</div>
      ) : cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item._id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="category">{item.category}</p>
                  {item.seller && <p className="seller">Seller: {item.seller}</p>}
                  <p className="price">₹{item.price}</p>
                </div>
                <div className="item-quantity">
                  <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                </div>
                <div className="item-actions">
                  <button className="delete-btn" onClick={() => deleteItem(item._id)}>
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
            <div className="summary-total">
              <span>Total:</span>
              <span className="price">₹{totalPrice}</span>
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