// Product Controller

const Product = require('../models/product')

const getAllProducts = async (req, res) => {
    const {featured, company, name} = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = {$regex: name, $options: 'i'}
    }

    console.log(queryObject);
    
    // Just putting in the req.query in find() works
    // BUT we can not handle unrelated query params
    // const products = await Product.find(req.query)
    const products = await Product.find(queryObject)
    res.status(200).json({count: products.length, products})
}

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        name: 'vase table'
    })

    // Express Async Error package uses throw instread of next()
    // throw new Error('testing async errors')
    res.status(200).json({products})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}