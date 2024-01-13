const Product = require('../model/product');

class ProductDAO {

    async createProducts(product) {

        const newProduct = new Product(product)

        return await newProduct.save()

    }

    async getProducts(limit) {
        return await Product.find().limit(limit)
    }

    async getProductsId(id) {
        const product = await Product.findById(id)

        if (!product) {
            return
        }

        return product
    }

    async removeProduct(id) {

        const product = await Product.findById(id)

        if (!product) {
            return
        }

        const productRemove = await Product.findByIdAndDelete(id)

        return productRemove
    }

    async updateProduct(id, product) {

        const productUpdated = await Product.findById(id)

        if (!productUpdated) {
            return
        }

        const productUdpated = await Product.findByIdAndUpdate(id, product, {
            new: true
        })

        return productUdpated

    }

}

module.exports = ProductDAO