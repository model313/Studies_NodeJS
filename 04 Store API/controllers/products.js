// Product Controller

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: 'Products Route'})
}

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({msg: 'Products Testing'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}