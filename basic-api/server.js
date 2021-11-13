const porta = 3000

const express = require('express')
const dataBase = require('./database')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Adicionar usuarios
//Add new Users
app.post('/usuarios',(req, res)=>{
    const usuario = dataBase.addUser(req.body)
    res.send(usuario)
})

//listar todos os usuarios
//list all users
app.get('/usuarios',(req, res)=>{
    res.send(dataBase.listAllUser)
})

//procurar usuario por id
//search user by id
app.get('/usuarios/:id', (req, res) =>{
    res.send(dataBase.searchUserbyID(req.params.id))
})

//deletar um usuario
//delete a user
app.delete('/usuarios/:id', (req, res)=>{
    const usuario = dataBase.deleteUserById(req.params.id)
    res.send(usuario)
})

app.put('/usuario/:id', (req, res)=>{
    const usuario = dataBase.editUser({
        id: req.params.id,
        nome: req.body.nome,
        senha: req.body.senha
    })
    return usuario
})




app.listen(porta,()=>{
    console.log(`Server iniciado na porta: ${porta}.`)
})