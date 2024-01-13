const { Router } = require('express');

const { createCart, getCart, addProductCart } = require('../controller/carts.ctrl');

const router = Router()

router.post('/api/carts', createCart)

router.get('/api/carts/:cid', getCart)

router.patch('/api/carts/:cid', addProductCart)


module.exports = router