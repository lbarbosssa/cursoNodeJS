 /**
 * sendFile = enviar arquivo
 * __dirname = diretório absoluto applicação
 */

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})

app.listen(8081, ()=> {
    console.log('Server running http://localhost:8081')
})