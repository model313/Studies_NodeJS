// This is not how we authorize users, just an example for middleware


// http://localhost:8080/about/?user=john
const authorize = (req,res,next) => {
    // console.log(req.query)
    const {user} = req.query

    if (user === 'john'){
        // Create new property to return
        req.user = {name: 'john', id: 3}
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize