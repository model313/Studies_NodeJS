const express = require('express')
const app = express()
let { people } = require('./data')

// Static assets
app.use(express.static('./methods-public'))
// Parse form data
app.use(express.urlencoded({ extended: false}))
// Parse json data
app.use(express.json())

// Try to use Postman to test these methods

// PUT (Update)
/*
Test with json in body:
{
    "name":"john"
}
*/
app.put('/api/people/:id', (req,res) => {
    const {id} = req.params
    const {name} = req.body
    // console.log(id, name)

    const person = people.find(
        (person) => person.id == Number(id)
    )

    if(!person){
        return res
            .status(404)
            .json({success: false, msg: `No person with id: ${id}`})
    }

    // Change name
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
})


// DELETE
app.delete('/api/people/:id', (req,res) => {
    const person = people.find(
        (person) => person.id === Number(req.params.id)
    )

    if(!person){
        return res
            .status(404)
            .json({success: false, msg: `No person with id: ${req.params.id}`})
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({success: true, data: newPeople})
})

app.listen(8080, () => {
    console.log('Server is listening on port 8080')
})