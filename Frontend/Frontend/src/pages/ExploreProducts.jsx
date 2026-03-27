import React, { useState } from 'react'
import './ExploreProducts.css'

const initialProducts = [
  {
    id: 1,
    name: 'Organic Apples',
    category: 'Fruits',
    price: 150,
    image: 'https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&h=220&P=0',
    seller: 'FarmVille'
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    price: 70,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    seller: 'GreenGrocer'
  },
  {
    id: 3,
    name: 'Dairy Milk',
    category: 'Milk & Dairy',
    price: 60,
    image: 'https://images.unsplash.com/photo-1582719478267-9787e0c3a230',
    seller: 'DairyHouse'
  },
  {
    id: 4,
    name: 'Organic Eggs',
    category: 'Farm Fresh Eggs',
    price: 120,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    seller: 'Eggcellent'
  },
  {
    id: 1,
    name: 'Organic Apples',
    category: 'Fruits',
    price: 150,
    image: 'https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&h=220&P=0',
    seller: 'FarmVille'
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    price: 70,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    seller: 'GreenGrocer'
  },
  {
    id: 3,
    name: 'Dairy Milk',
    category: 'Milk & Dairy',
    price: 60,
    image: 'https://images.unsplash.com/photo-1582719478267-9787e0c3a230',
    seller: 'DairyHouse'
  },
  {
    id: 4,
    name: 'Organic Eggs',
    category: 'Farm Fresh Eggs',
    price: 120,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    seller: 'Eggcellent'
  },
  {
    id: 1,
    name: 'Organic Apples',
    category: 'Fruits',
    price: 150,
    image: 'https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&h=220&P=0',
    seller: 'FarmVille'
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    price: 70,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    seller: 'GreenGrocer'
  },
  {
    id: 3,
    name: 'Dairy Milk',
    category: 'Milk & Dairy',
    price: 60,
    image: 'https://images.unsplash.com/photo-1582719478267-9787e0c3a230',
    seller: 'DairyHouse'
  },
  {
    id: 4,
    name: 'Organic Eggs',
    category: 'Farm Fresh Eggs',
    price: 120,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    seller: 'Eggcellent'
  },
  {
    id: 1,
    name: 'Organic Apples',
    category: 'Fruits',
    price: 150,
    image: 'https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&h=220&P=0',
    seller: 'FarmVille'
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    price: 70,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    seller: 'GreenGrocer'
  },
  {
    id: 3,
    name: 'Dairy Milk',
    category: 'Milk & Dairy',
    price: 60,
    image: 'https://images.unsplash.com/photo-1582719478267-9787e0c3a230',
    seller: 'DairyHouse'
  },
  {
    id: 4,
    name: 'Organic Eggs',
    category: 'Farm Fresh Eggs',
    price: 120,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    seller: 'Eggcellent'
  }
]

const ExploreProducts = () => {
  const [products, setProducts] = useState(initialProducts)
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', image: '' })

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.image) return
    const product = {
      ...newProduct,
      id: products.length + 1,
      price: Number(newProduct.price),
      seller: 'User Seller'
    }
    setProducts([product, ...products])
    setNewProduct({ name: '', category: '', price: '', image: '' })
  }

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart`)
  }

  const handleBuy = (product) => {
    alert(`Buying ${product.name} for ₹${product.price}`)
  }

  return (
    <section className="explore-products">
      <div className="explore-header">
        <h2>Explore Products</h2>
        <p>Upload products to sell and browse community listings</p>
      </div>

      <form className="product-upload-form" onSubmit={handleAddProduct}>
        <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Product Name" />
        <input type="text" name="category" value={newProduct.category} onChange={handleChange} placeholder="Category" />
        <input type="number" name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" />
        <input type="text" name="image" value={newProduct.image} onChange={handleChange} placeholder="Image URL" />
        <button type="submit">Upload Product</button>
      </form>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-body">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="product-seller">Seller: {product.seller}</p>
              <p className="product-price">₹{product.price}</p>
              <div className="product-actions">
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button className="buy-now" onClick={() => handleBuy(product)}>Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExploreProducts
