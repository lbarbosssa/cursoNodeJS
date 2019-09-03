/**
 * :/ nome = parametro - pode add qnts quiser, e o paramentro se torna obrigatorio na rota
 * req.params resgata os parametros da requisição
 * forma de enviar os parametros: http://localhost:8081/ola/lucas/desenv
 * apenas um send por get
 */

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to website, with node and Express!!!')
})
app.get('/outro', (req, res) => {
    res.send('Outra rota')
})

app.get('/ola/:nome/:cargo', (req, res) => {
    res.send(
        '<h1> Ola: ' + req.params.nome + '<h1>' +
        '<h2> Cargo: ' + req.params.cargo + '</h2>'
        )
})

app.listen(8081, ()=> {
    console.log('Server running http://localhost:8081')
})