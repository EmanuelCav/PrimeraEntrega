const CartDAO = require('../dao/mongo/MongoCartManager');

const cartDao = new CartDAO()

const createCart = async (req, res) => {

    try {

        const cart = await cartDao.createCart()

        return res.status(200).json({
            message: "Cart added successfully",
            cart
        })

    } catch (error) {
        return res.status(500).json(error.message)
    }

}

const getCart = async (req, res) => {

    const { cid } = req.params

    const cart = await cartDao.getCartById(cid)

    if(!cart) {
        return res.status(200).json({ message: "Cart does not exists" })
    }

    return res.status(200).json(cart)

}

const addProductCart = async (req, res) => {

    const { quantity } = req.body
    const { cid, pid } = req.params

    const cart = await cartDao.addProduct(quantity, cid, pid)

    if(!cart) {
        return res.status(200).json({ message: "Cart or product does not exists" })
    }

    return res.status(200).json({
        message: "Product added successfully",
        cart
    })
}

module.exports = {
    createCart,
    getCart,
    addProductCart
}