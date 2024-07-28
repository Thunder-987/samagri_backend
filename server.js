const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel');

dotenv.config();
app.use(express.json())
mongoose.connect(process.env.DATABASE_ACCESS)
    .then(() => {
        app.listen(3000, () => console.log("server is up and running"));
    })

app.get('/', (req, res) => {
    res.send({ a: "hello my name ios pavan karthik" })
})
app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch (error) {
        console.log(error.mesasge);
        res.status(500).json({ message: error.message })
    }
})
app.get('/product', async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
app.get('/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
app.put('/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:`Couldn't find the product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id)
        
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
