//Comandos para o gerenciamento do banco de dados
//commands for management the database
const sequence = {
    _id: 1,
    get id(){return this._id++}
}

const usuarios = {}

const addUser = (usuario) =>{
    //fazer condicao para nao adicionar ja existentes
    if(!usuario.id){
        usuario.id = sequence.id
    }
    usuarios[usuario.id] = usuario
    return usuario
}

const listAllUser = () =>{
    return Object.values(usuarios)
}

const searchUserbyID = (id) => {
    if(!usuarios[id]){
        console.log("Usuario não encontrado")
        return {}
    }else{
        return usuarios[id]
    }
}

const deleteUserById = (id)=>{
    const usuarioAux = usuarios[id]
    delete usuarios[id]

    return usuarioAux
}

const editUser = (usuario)=>{
    if(!usuario.id){
        console.log("usuario nao existe")
    }else{
        usuarios[usuario.id] = usuario
    }
}

module.exports = {addUser, listAllUser, searchUserbyID, deleteUserById, editUser}
