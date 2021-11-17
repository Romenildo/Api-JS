//Adicionar usuarios
const dataBase = require("../db")
const router = require("express")

//Add new Users
router.post('/usuarios',(req, res)=>{
    const usuario = dataBase.addUser(req.body)
    res.send(usuario)
})

//listar todos os usuarios
//list all users
router.get('/usuarios',(req, res)=>{
    res.send(dataBase.listAllUser())
})

//procurar usuario por id
//search user by id
router.get('/usuarios/:id', (req, res) =>{
    res.send(dataBase.searchUserbyID(req.params.id))
})

//deletar um usuario
//delete a user
router.delete('/usuarios/:id', (req, res)=>{
    const usuario = dataBase.deleteUserById(req.params.id)
    res.send(usuario)
})

//editar usuario
//edit user
router.put('/usuarios/:id', (req, res)=>{
    const usuario = dataBase.addUser({
        id: req.params.id,
        nome: req.body.nome,
        senha: req.body.senha
    })
    res.send(usuario)
})

module.exports = app=> app.use('/', router)