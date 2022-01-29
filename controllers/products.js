const Products = require('../models/products');
const items = require('../client/src/assests/files/products.json')

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Products.find();
        
        return res.status(200).json({
            success: true,
            data: products,
        })
        

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error
        })
    }
}

exports.addProducts = async (req, res, next) => {
    try {

        await Products.insertMany(items)


        return res.status(201).json({
            success:true,
            message: 'Products Added Successfully'
        })

        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error
        })
    }
}

exports.removeProduct = async (req, res, next) => {
    try {
        const product = await Products.findById(req.params.id);

        if(!product){
            return res.status(404).json({
                success: false,
                message: 'Product Not Found'
            })
        }
        else{
            await product.remove();
            return res.status(200).json({
                success: true,
                message: 'Product Removed Successfully',
                product: product
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error
        })
    }
}