const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  seller: {
    type: String,
    default: ''
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
}//, {
//   versionKey: false
// }
);

const CartModel = mongoose.model('cart', cartItemSchema);
module.exports = CartModel;
