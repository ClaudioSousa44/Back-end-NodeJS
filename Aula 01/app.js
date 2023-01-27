//Comentário em linha
/* 
 comentário em bloco
*/
console.log('Testando o node.js');


var readline = require('readline');

var entradaDeDados =   readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

entradaDeDados.question('Favor digitar o seu nome: \n', function (nome){
   console.log('Bem vindo, ' + nome + ' ao servidor Node.js');
});



