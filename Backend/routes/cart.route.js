const express = require('express');
const CartModel = require('../model/cart.model');
const cartRouter = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
// const Auth = require("../middleware/auth.middleware");


// Add item to cart
cartRouter.post('/add',  async (req, res) => {
    const { productId, name, price, quantity, category, image, seller } = req.body;

    if (!productId || !name || !price || !category || !image) {
        return res.status(400).json({ message: 'Missing required product fields' });
    }

    try {
        // Check if item already exists in cart
        const existingItem = await CartModel.findOne({
            userId: req.userId,
            productId: productId
        });

        if (existingItem) {
            // Update quantity if item exists
            existingItem.quantity = (existingItem.quantity || 1) + (quantity || 1);
            await existingItem.save();

            return res.status(200).json({
                message: 'Product quantity updated in cart',
                cartItem: existingItem
            });
        }

        // Create new cart item
        const cartItem = new CartModel({
            userId: req.userId,
            productId,
            name,
            price,
            quantity: quantity || 1,
            category,
            image,
            seller: seller || ''
        });

        await cartItem.save();
        console.log('Item added to cart for user:', req.userId);

        res.status(201).json({
            message: 'Product added to cart',
            cartItem
        });
    } catch (error) {
        console.error('Add to cart error:', error);
        res.status(500).json({
            message: 'Error adding product to cart',
            error: error.message
        });
    }
});

// Get user's cart items
cartRouter.get('/items',  async (req, res) => {
    try {
        const cartItems = await CartModel.find({ userId: req.userId })
            .populate('productId', 'name price category image');

        res.status(200).json({
            message: 'Cart items fetched successfully',
            cartItems,
            total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });
    } catch (error) {
        console.error('Fetch cart items error:', error);
        res.status(500).json({
            message: 'Error fetching cart items',
            error: error.message
        });
    }
});

// Remove item from cart
cartRouter.delete('/remove/:cartItemId', async (req, res) => {
    const { cartItemId } = req.params;

    try {
        const cartItem = await CartModel.findById(cartItemId);

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        // Verify item belongs to user
        if (cartItem.userId.toString() !== req.userId) {
            return res.status(403).json({ message: 'You can only delete your own cart items' });
        }

        await CartModel.findByIdAndDelete(cartItemId);
        console.log('Item removed from cart:', cartItemId);

        res.status(200).json({
            message: 'Item removed from cart'
        });
    } catch (error) {
        console.error('Remove from cart error:', error);
        res.status(500).json({
            message: 'Error removing item from cart',
            error: error.message
        });
    }
});

// Clear entire cart
cartRouter.delete('/clear', async (req, res) => {
    try {
        await CartModel.deleteMany({ userId: req.userId });
        console.log('Cart cleared for user:', req.userId);

        res.status(200).json({
            message: 'Cart cleared successfully'
        });
    } catch (error) {
        console.error('Clear cart error:', error);
        res.status(500).json({
            message: 'Error clearing cart',
            error: error.message
        });
    }
});

// Update item quantity
cartRouter.put('/update/:cartItemId', async (req, res) => {
    const { cartItemId } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
        return res.status(400).json({ message: 'Invalid quantity' });
    }

    try {
        const cartItem = await CartModel.findById(cartItemId);

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        if (cartItem.userId.toString() !== req.userId) {
            return res.status(403).json({ message: 'You can only update your own cart items' })
        }

        cartItem.quantity = quantity;
        await cartItem.save();

        res.status(200).json({
            message: 'Cart item quantity updated',
            cartItem
        });
    } catch (error) {
        console.error('Update cart item error:', error);
        res.status(500).json({
            message: 'Error updating cart item',
            error: error.message
        });
    }
});

module.exports = cartRouter;
