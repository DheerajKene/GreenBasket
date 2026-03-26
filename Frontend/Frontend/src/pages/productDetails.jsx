import React from 'react'
import { useParams } from 'react-router-dom'
import './productDetails.css'

const sampleProducts = {
  1: {
    id: 1,
    name: 'Fresh Apples',
    category: 'Fruits',
    weight: '2 kg',
    price: 150,
    description: 'Crisp and juicy apples harvested from local orchards. Perfect for snacking and baking.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&h=220&P=0'
  },
  2: {
    id: 2,
    name: 'Organic Tomatoes',
    category: 'Vegetables',
    weight: '1 kg',
    price: 80,
    description: 'Naturally grown, pesticide-free tomatoes ideal for salads and cooking.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&h=220&P=0'
  }
}

const ProductDetails = () => {
  const { id } = useParams()
  const product = sampleProducts[id] || sampleProducts[1]

  return (
    <div className="product-details-page">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-weight">Weight: {product.weight}</p>
          <p className="product-price">Price: ₹{product.price}</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
