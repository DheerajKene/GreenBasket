# 🌿 GreenBasket - E-Commerce Platform

A modern, full-stack e-commerce platform built with **React**, **Node.js**, **Express**, and **MongoDB** that allows users to browse, buy, and sell eco-friendly products with secure authentication and cart management.

---
### GreenBasket deployed link: https://greenbasket3.vercel.app/

## ✨ Features

### User Management
- ✅ **User Registration** - Create new account with validation
- ✅ **User Login** - Secure authentication with JWT tokens
- ✅ **User Profile** - View and manage user information
- ✅ **Password Hashing** - Secure password storage using bcrypt

### Product Management
- ✅ **Upload Products** - Sellers can list products for sale
- ✅ **View All Products** - Browse all available products
- ✅ **Product Details** - See detailed information about each product
- ✅ **Update Products** - Edit product information (seller only)
- ✅ **Delete Products** - Remove products from listing (seller only)
- ✅ **Seller Products** - View products by specific seller
- ✅ **My Products** - View user's own uploaded products

### Shopping Cart
- ✅ **Add to Cart** - Add products to shopping cart
- ✅ **View Cart** - See all items in cart with total price
- ✅ **Update Quantity** - Modify product quantities
- ✅ **Remove Items** - Delete items from cart
- ✅ **Clear Cart** - Empty entire shopping cart

### Frontend Pages & Components
- 🏠 **Dashboard** - Home page with featured products
- 📦 **Explore Products** - Browse and filter products
- 🛒 **Shopping Cart** - View and manage cart items
- 👤 **My Account** - User profile and account settings
- 📱 **Product Details** - Detailed product information
- 📂 **Categories** - Browse products by category
- ℹ️ **About** - Information about GreenBasket
- 📞 **Contact** - Contact form and information
- ❓ **Help** - FAQ and support section
- 🔐 **Login/Registration** - Authentication pages

---

## 🛠️ Technology Stack

### Backend
- **Framework**: Express.js 5.2.1
- **Runtime**: Node.js (with Nodemon for development)
- **Database**: MongoDB 9.3.1
- **Authentication**: JWT (JSON Web Tokens)
- **Password Encryption**: bcrypt 6.0.0
- **CORS**: cors 2.8.6
- **Environment**: dotenv 17.3.1

### Frontend
- **Library**: React 19.2.0
- **Routing**: React Router DOM 7.13.1
- **Build Tool**: Vite 7.3.1
- **HTTP Client**: axios 1.13.6
- **Linting**: ESLint 9.39.1
- **Styling**: CSS3

---

## 📁 Project Structure

```
GreenBasket/
├── Backend/
│   ├── index.js                    # Main server file
│   ├── package.json
│   ├── config/
│   │   └── db.js                   # MongoDB connection
│   ├── middleware/
│   │   └── auth.middleware.js      # JWT authentication middleware
│   ├── model/
│   │   ├── user.model.js           # User schema
│   │   ├── product.model.js        # Product schema
│   │   └── cart.model.js           # Cart schema
│   └── routes/
│       ├── user.route.js           # User API endpoints
│       ├── product.route.js        # Product API endpoints
│       └── cart.route.js           # Cart API endpoints
├── Frontend/
│   └── Frontend/
│       ├── package.json
│       ├── vite.config.js
│       ├── eslint.config.js
│       ├── index.html
│       ├── src/
│       │   ├── main.jsx            # React entry point
│       │   ├── App.jsx             # Main App component
│       │   ├── Allroutes.jsx       # Route configuration
│       │   ├── App.css
│       │   ├── index.css
│       │   ├── Context/
│       │   │   └── AuthContext.jsx # Authentication context
│       │   ├── componants/
│       │   │   ├── Dashboard/      # Home page
│       │   │   ├── Cart/           # Shopping cart
│       │   │   ├── Login/          # Login page
│       │   │   ├── Register/       # Registration page
│       │   │   ├── MyAccount/      # User profile
│       │   │   ├── Hero/           # Hero section
│       │   │   ├── Categories/     # Product categories
│       │   │   ├── About/          # About page
│       │   │   ├── Contact/        # Contact page
│       │   │   ├── Help/           # Help/FAQ page
│       │   │   ├── Footer/         # Footer component
│       │   │   └── DashNavBar/     # Navigation bar
│       │   └── pages/
│       │       ├── ExploreProducts.jsx  # Product listing page
│       │       ├── productDetails.jsx   # Product details page
│       │       └── MyAccount.jsx        # Account management
│       ├── public/                 # Static files
│       └── img/                    # Images
└── README.md
```

---

## 🚀 Installation & Setup

### Backend Setup

1. **Navigate to Backend directory**
   ```bash
   cd Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** in Backend directory with:
   ```
   PORT=8100
   MONGO_URL=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret_key
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   Server will run on `https://greenbasket-59xb.onrender.com`

### Frontend Setup

1. **Navigate to Frontend directory**
   ```bash
   cd Frontend/Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Application will run on `http://localhost:5173` (or as shown in terminal)

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🔐 API Endpoints

### User Routes (`/user`)

| Method | Endpoint | Auth Required | Description |
|--------|----------|---|---|
| POST | `/register` | ❌ | Register new user |
| POST | `/login` | ❌ | Login user & get JWT token |
| GET | `/profile` | ✅ | Get user profile information |

### Product Routes (`/product`)

| Method | Endpoint | Auth Required | Description |
|--------|----------|---|---|
| POST | `/upload` | ✅ | Upload new product (seller) |
| GET | `/all` | ✅ | Get all products |
| GET | `/:productId` | ❌ | Get single product details |
| GET | `/user/:userId` | ❌ | Get products by specific user |
| GET | `/my-products` | ✅ | Get logged-in user's products |
| PUT | `/:productId` | ✅ | Update product (owner only) |
| DELETE | `/:productId` | ✅ | Delete product (owner only) |

### Cart Routes (`/cart`)

| Method | Endpoint | Auth Required | Description |
|--------|----------|---|---|
| POST | `/add` | ✅ | Add item to cart |
| GET | `/items` | ✅ | Get user's cart items |
| PUT | `/update/:cartItemId` | ✅ | Update item quantity |
| DELETE | `/remove/:cartItemId` | ✅ | Remove item from cart |
| DELETE | `/clear` | ✅ | Clear entire cart |

---

## 📊 Data Models & Validations

### User Model
```javascript
{
  Avatar: String (unique),
  FirstName: String (required),
  LastName: String (required),
  Mobile: String (required, unique),
  Password: String (required, hashed with bcrypt),
  ConfirmPassword: String (required, validated on register)
}
```

**Validations:**
- ✓ All fields required on registration
- ✓ Password must match ConfirmPassword
- ✓ Mobile number must be unique
- ✓ Password stored as hashed value using bcrypt

### Product Model
```javascript
{
  img: String (required),
  category: String (required),
  name_of_product: String (required),
  price: String (required),
  product_description: String (required),
  seller: ObjectId (reference to User, required),
  created_At: Date (default: current time)
}
```

**Validations:**
- ✓ All product fields required
- ✓ Seller reference must be valid user
- ✓ Only product owner can update/delete

### Cart Model
```javascript
{
  userId: ObjectId (reference to User, required),
  productId: ObjectId (reference to Product, required),
  name: String (required),
  price: Number (required),
  quantity: Number (default: 1, min: 1),
  category: String (required),
  image: String (required),
  seller: String (default: ''),
  addedAt: Date (default: current time)
}
```

**Validations:**
- ✓ Required fields: productId, name, price, category, image
- ✓ Quantity minimum: 1
- ✓ Only user owning cart item can modify/delete
- ✓ Duplicate items increase quantity instead of creating new entry

---

## 👥 User Types & Roles

### 1. **Buyer/Customer**
   - Can register and login
   - Browse all products
   - Add products to cart
   - View cart and checkout
   - View product details
   - Cannot upload products or manage listings

### 2. **Seller**
   - All buyer features + following:
   - Upload/list products for sale
   - View own products
   - Update product information
   - Delete products from listing
   - Cannot modify other sellers' products

---

## 🔒 Authentication & Security

### Authentication Flow
1. **Registration**: User provides FirstName, LastName, Mobile, and Password
2. **Password Hashing**: Password hashed with bcrypt (salt rounds: 5)
3. **Login**: User provides Mobile and Password
   - System validates credentials
   - JWT token generated and returned
4. **Protected Routes**: JWT token required in `Authorization` header
   - Format: `Authorization: Bearer <token>`
5. **Token Verification**: Middleware validates token signature and expiration

### Security Features
- ✓ Password hashing with bcrypt
- ✓ JWT token-based authentication
- ✓ Protected API endpoints requiring authentication
- ✓ CORS enabled for cross-origin requests
- ✓ User data validation on all inputs
- ✓ Ownership verification for product/cart operations

---

## 🎯 How to Use

### 1. **Register a New Account**
   - Navigate to `/register`
   - Fill in First Name, Last Name, Mobile Number, Password
   - Confirm password matches
   - Click Register

### 2. **Login**
   - Go to `/login`
   - Enter Mobile Number and Password
   - JWT token stored automatically
   - Redirected to Dashboard

### 3. **Browse Products**
   - Visit `/explore` to see all products
   - Click on product card for details
   - View seller information and product description

### 4. **Add to Cart**
   - On product details page, click "Add to Cart"
   - Choose quantity
   - Item added to shopping cart

### 5. **Manage Cart**
   - Visit `/cart` to view all items
   - Adjust quantities or remove items
   - See total price calculation

### 6. **Upload Products (Sellers)**
   - Access seller dashboard in `/dashboard`
   - Click "Upload Product"
   - Fill in product details (name, price, category, description, image)
   - Submit to list product

### 7. **Manage Your Products**
   - View uploaded products in `/account` or dashboard
   - Edit product information
   - Delete products when needed

---

## 📡 Environment Variables

### Backend (.env)
```env
PORT=8100                              # Server port
MONGO_URL=mongodb+srv://...           # MongoDB connection string
SECRET_KEY=your_secret_jwt_key        # JWT secret for token signing
```

### Frontend
- API base URL configured in axios instances
- Default: `https://greenbasket-59xb.onrender.com/api`

---

## 💡 Key Features Explained

### Cart Management
- Users can add products to cart; if product already in cart, quantity increases
- Cart persists per user in database
- Real-time total price calculation
- Quick remove and clear options

### Product Lifecycle
- Sellers can upload new products with images, descriptions, pricing
- Products linked to seller for accountability
- Only owner can modify or delete their products
- Full product history maintained with timestamps

### Authentication Flow
- Secure registration with password confirmation
- Mobile number as unique identifier
- JWT tokens for stateless authentication
- Token included in all protected requests

---

## 🔧 Running & Development

### Development Mode
```bash
# Backend (with auto-restart on changes)
cd Backend
npm start

# Frontend (with hot module replacement)
cd Frontend/Frontend
npm run dev
```

### Production Build
```bash
# Frontend
cd Frontend/Frontend
npm run build

# Backend - set NODE_ENV=production
```

---

## 📝 Future Enhancements

- 🛍️ Order management and checkout process
- 💳 Payment gateway integration
- ⭐ Product ratings and reviews
- 🔍 Advanced search and filtering
- 📧 Email notifications
- 📱 Mobile app version
- 🎨 Dark mode
- 🌍 Multi-language support

---

## 📄 License

ISC

---

## 👨‍💻 Support

For issues, questions, or contributions, please refer to documentation or contact the development team.

---

**Happy Shopping with GreenBasket! 🌿🛒**
