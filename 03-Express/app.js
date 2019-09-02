/**
 * Altamente recomendavel utilizar constantes e criar uma outra var para utilizar o express
 * a linsten tem q ficar por ultimo no codigo
 */

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to website, with node and Express!')
})
app.get('/outro', (req, res) => {
    res.send('Outra rota')
})

app.listen(8081, ()=> {
    console.log('Server running http://localhost:8081')
})