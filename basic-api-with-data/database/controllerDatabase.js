const sentence = {
    _id:1,
    get id(){return this._id++}
}

const products = require('./database.json',err=>{})


const checkNames = Object.values(products).map(e=>e.name)

//add or edit a product
const addItem = product =>{
    if(!product.id) product.id = sentence.id//product dont have a id
    
    products[product.id] = product
    return product
}

//list All products
const getItens= ()=>{
    return Object.values(products)
}

//get product by id
const getItem = (id) =>{
    return products[id]
}
//fazer pegar produto por nome

//deletar product
const deleteItem = (id)=>{
    const item = products[id]
    delete products[id]
    return item
}

module.exports = {addItem, getItem, getItens, deleteItem}