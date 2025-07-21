const {CustomAPIError} = require('../errors/customError')

const errorHandler = (err,req,res,next) => {
    if(err instanceof CustomAPIError){
        console.log('working?');
        
        return res.status(err.statusCode).json({msg: err.message})
    }
    
    console.log('throwing 500 default');
    console.log(err.statusCode);
    console.log(err.message);
    
    
    
    return res.status(500).json({msg: 'Something went wrong, please try again!'})
}

module.exports = errorHandler