const PORT = 3000

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("./Controllers/user")(app)


app.listen(PORT,()=>{
    console.log(`Server started in https://localhost:${PORT}`)
})