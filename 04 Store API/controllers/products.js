// Product Controller

const Product = require('../models/product')

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query
    const queryObject = {}

    // Search filter
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }


    // Numerical range filter (rating, price)
    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte'
        }
        // const regEx = /\b(<|>|>=|=|<|<=)\b/g    // Regular expression (apparently this is wrong..? <= will never be read)
        const regEx = /\b(>=|<=|>|<|=)\b/g         // Better option (original still works, but it might not work on other languages)

        let filters = numericFilters.replace(
          regEx,
          (match) => `-${operatorMap[match]}-`
        )

        // Result example: filters = price-$lt-40,rating-$lte-4

        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {        // Split into price and rating
            const [field, operator, value] = item.split('-')    // Split into three values
            if(options.includes(field)){
                queryObject[field] = {[operator]: Number(value)}// Map to queryObject
            }
        })
    }



    console.log(queryObject);


    // Find in DB
    let result = Product.find(queryObject)
    // Just putting in the req.query in find() works
    // BUT we can not handle unrelated query params
    // const products = await Product.find(req.query)


    // Sort result
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    // Field filter  (hide/show data fields)
    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }

    // Pagination
    const page = Number(req.query.page) || 1        // 1: Default
    const limit = Number(req.query.limit) || 10     // 10: Default
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)



    const products = await result
    res.status(200).json({ count: products.length, products })
}

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        name: 'vase table'
    })

    // Express Async Error package uses throw instread of next()
    // throw new Error('testing async errors')
    res.status(200).json({ products })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}