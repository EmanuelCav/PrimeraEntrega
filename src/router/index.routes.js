const { Router } = require('express');

const ProductManager = require('../dao/mongo/MongoProductManager')
const MessageManager = require('../dao/mongo/MongoMessageManager')

const router = Router()

const ProductDAO = new ProductManager()
const messageDAO = new MessageManager()

router.get('/realtimeproducts', async (req, res) => {

    const products = await ProductDAO.getProducts()

    res.render('realTimeProducts', {
        layout: 'home',
        products
    })
})

router.get('/chat', async (req, res) => {

    const messages = await messageDAO.getMessages()

    res.render('chat', {
        layout: 'home',
        messages
    })
})

module.exports = router