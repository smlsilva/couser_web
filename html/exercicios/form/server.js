const express = require('express')
const bodyParser = require('body-parser')
const { response } = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns</h1>')
})

app.post('/usuarios/3', (req, res) =>{
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Usuário incluido!')
})

app.listen(3003)