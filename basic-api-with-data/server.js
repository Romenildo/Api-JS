const port = 8080
const { response } = require('express')
const express = require('express')
const dataBase = require('./database/controllerDatabase')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//add product
app.post('/products', (req, res)=>{
    const product = dataBase.addItem(req.body)
    res.send(product)
})

//show products
app.get('/products', (req, res)=>{
    res.send(dataBase.getItens())
})

//product by id
app.get('/products/:id', (req, res)=>{
    res.send(dataBase.getItem(req.params.id))
})

// delete a product by id
app.delete('/products/:id',(req,res)=>{
    const product = dataBase.deleteItem(req.params.id)
    res.send(product)
})
//edit a product
app.put('/products/:id',(req, res)=>{
    res.send(dataBase.addItem({
        id:req.params.id,
        name: req.body.name,
        price: req.body.price,
        validate: req.body.validate
    }))
})




app.listen(port, ()=>{
    console.log(`Server started in port ${port}.`)
})
