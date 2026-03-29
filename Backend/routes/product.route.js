const express = require('express');
const productRouter = express.Router();
const ProductModel = require('../model/product.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

// Middleware to verify token and extract user ID
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

// Upload a new product by logged-in user
productRouter.post('/upload', authenticateToken, async (req, res) => {
    const { img, category, name_of_product, price, product_description } = req.body;

    if (!img || !category || !name_of_product || !price || !product_description) {
        return res.status(400).json({ message: 'Missing required product fields' });
    }

    try {
        const newProduct = new ProductModel({
            img,
            category,
            name_of_product,
            price,
            product_description,
            seller: req.userId
        });

        await newProduct.save();
        console.log('Product uploaded successfully by user:', req.userId);

        res.status(201).json({
            message: 'Product uploaded successfully',
            product: newProduct
        });
    } catch (error) {
        console.error('Product upload error:', error);
        res.status(500).json({
            message: 'Error uploading product',
            error: error.message
        });
    }
});

// Get all products with seller information
productRouter.get('/all', async (req, res) => {
    try {
        const products = await ProductModel.find().populate('seller', 'FirstName LastName Mobile');
        res.status(200).json({
            message: 'Products fetched successfully',
            products
        });
    } catch (error) {
        console.error('Fetch products error:', error);
        res.status(500).json({
            message: 'Error fetching products',
            error: error.message
        });
    }
});

// Get products uploaded by a specific user
productRouter.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const products = await ProductModel.find({ seller: userId }).populate('seller', 'FirstName LastName Mobile');
        res.status(200).json({
            message: 'User products fetched successfully',
            products
        });
    } catch (error) {
        console.error('Fetch user products error:', error);
        res.status(500).json({
            message: 'Error fetching user products',
            error: error.message
        });
    }
});

// Get products uploaded by logged-in user
productRouter.get('/my-products', authenticateToken, async (req, res) => {
    try {
        const products = await ProductModel.find({ seller: req.userId }).populate('seller', 'FirstName LastName Mobile');
        res.status(200).json({
            message: 'Your products fetched successfully',
            products
        });
    } catch (error) {
        console.error('Fetch my products error:', error);
        res.status(500).json({
            message: 'Error fetching your products',
            error: error.message
        });
    }
});

// Get a single product by ID
productRouter.get('/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await ProductModel.findById(productId).populate('seller', 'FirstName LastName Mobile');
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({
            message: 'Product fetched successfully',
            product
        });
    } catch (error) {
        console.error('Fetch product error:', error);
        res.status(500).json({
            message: 'Error fetching product',
            error: error.message
        });
    }
});

// Update product (only by owner)
productRouter.put('/:productId', authenticateToken, async (req, res) => {
    const { productId } = req.params;
    const { img, category, name_of_product, price, product_description } = req.body || {};

    try {
        const product = await ProductModel.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.seller.toString() !== req.userId) {
            return res.status(403).json({ message: 'You can only update your own products' });
        }

        if (img) product.img = img;
        if (category) product.category = category;
        if (name_of_product) product.name_of_product = name_of_product;
        if (price) product.price = price;
        if (product_description) product.product_description = product_description;

        await product.save();
        console.log('Product updated successfully:', productId);

        res.status(200).json({
            message: 'Product updated successfully',
            product
        });
    } catch (error) {
        console.error('Product update error:', error);
        res.status(500).json({
            message: 'Error updating product',
            error: error.message
        });
    }
});

// Delete product (only by owner)
productRouter.delete('/:productId', authenticateToken, async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await ProductModel.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.seller.toString() !== req.userId) {
            return res.status(403).json({ message: 'You can only delete your own products' });
        }

        await ProductModel.findByIdAndDelete(productId);
        console.log('Product deleted successfully:', productId);

        res.status(200).json({
            message: 'Product deleted successfully'
        });
    } catch (error) {
        console.error('Product delete error:', error);
        res.status(500).json({
            message: 'Error deleting product',
            error: error.message
        });
    }
});

module.exports = productRouter;
