/* 
- Objetivo: Criar um sistema que gerencie números pares e impares
- Data: 13/02/2023
- Autor: Claudio Sousa
- Versão: 1.0
*/


var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


var separador = require('./modulo/calculadora.js')


entradaDeDados.question('Qual o número inicial? \n', function(initNumber){

    let iniNu = initNumber

    entradaDeDados.question('Qual o número final? \n', function(finalNumber){

        let finalNu = finalNumber

        console.log(
            ' 1 - PAR \n' +
            ' 2 - IMPAR \n' +
            ' 3 - PAR E IMPAR'
        )

        entradaDeDados.question('Quais números você deseja que seja visível? \n', function(res){
            
            let resUsuario = res

            let exibir = separador.calcular(iniNu, finalNu, resUsuario)
        })
    })
})