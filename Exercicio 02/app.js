/* 
- Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
- Data: 13/02/2023
- Autor: Claudio Sousa
- Versão: 1.0
*/



var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let calculadora1 = require('./modulo/calcularTabuada.js')




entradaDeDados.question('Qual o Primeiro Multiplicando? \n', function(mult1){

    let multiplicando1 = mult1

    entradaDeDados.question('Qual o Segundo Multiplicando? \n', function(mult2){

        let multiplicando2 = mult2

        entradaDeDados.question('Qual o Menor Multiplicador? \n', function(minMult){

            let menorMultiplicador = minMult

            entradaDeDados.question('Qual o Maior Multiplicador? \n', function(maxMult){

                let maiorMultiplicador = maxMult

                let resultado1 = calculadora1.tabuada(multiplicando1,multiplicando2,menorMultiplicador, maiorMultiplicador)

                

            })
        })
    })
})