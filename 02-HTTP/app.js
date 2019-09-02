/**
 * chama o modulo = requre('http') .. padrao do node
 * createServer = abre o servidor e cria sessão
 * listen = porta de rede  onde vai abrir
 * função de callback no create server, serve para receber e devolver respotas.
 * esse metodo, é necessário parar o servidor para surtir efeito nas alterações
 */

var http = require('http')

http.createServer((req, res) => {
    res.end('Bem vindo ao website!!')
}).listen(8081)

console.log('Servidor rodando')

