/** 
 * Utilizando os modulos (funções em outros arquivos)
 * É necessário dar um nome de variavel para cada função de determinado modulo
 * pode usar arrow function para simplificar o codigo
*/


var soma = require('./modulos/soma')
var sub = require('./modulos/sub')
var multi = require('./modulos/multi')
var div = require('./modulos/div')


console.log('numeros utilizados 10 e 20')
console. log('+ ' + soma(10,20))
console. log('- ' + sub(10,20))
console. log('* ' + multi(10,20))
console. log('/ ' + div(10,20))
