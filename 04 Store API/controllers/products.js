// Product Controller

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: 'Products Route'})
}

const getAllProductsStatic = async (req, res) => {
    // Express Async Error package uses throw instread of next()
    throw new Error('testing async errors')
    res.status(200).json({msg: 'Products Testing'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}