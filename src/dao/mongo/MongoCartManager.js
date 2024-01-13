const Cart = require('../model/cart');
const ProductCart = require('../model/productCart');

class CartDAO {

    async createCart() {

        const newCart = await new Cart()

        return await newCart.save()

    }

    async getCartById(id) {

        const cart = await Cart.findById(id)

        if(!cart) {
            return
        }

        return cart

    }

    async addProduct(quantity, cid, pid) {

        const cart = await Cart.findById(cid)

        if(!cart) {
            return
        }

        const product = await Product.findById(pid)

        if(!product) {
            return
        }

        const newProductCart = new ProductCart({
            quantity,
            cart: cid,
            product: pid
        })

        const productAdded = await Cart.findByIdAndUpdate(cid, {
            $push: {
                products: newProductCart._id
            }
        }, {
            new: true
        })

        return productAdded

    }

}

module.exports = CartDAO