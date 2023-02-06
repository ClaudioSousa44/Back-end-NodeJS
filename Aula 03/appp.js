/* 
* Objetivo: correção cálculos matemáticos
* Data: 03/02/2023
* Autor: Professor Marcel
* Versão: 1.0
*/
var matematica = require('./modulo/calculadora.js')

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

entradaDeDados.question('Valor 1: \n', function(numero1){

    let valor1 = numero1

    entradaDeDados.question('Valor 2: \n', function(numero2){

        let valor2= numero2

        entradaDeDados.question('Escolha uma operação matemática: [ SOMAR || SUBTRAIR || MULTIPLICAR || DIVIDIR ] \n', function(tipoCalc){
            
            let operacao = tipoCalc.toUpperCase()
            
            let resultado

            if (valor1 == '' || valor2 == '' || operacao == ''){
                console.log('ERRO: Não é possível calcular se algum se dado estiver vazio!!!')

            } else if (isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: Não é possivel calcular se os dados digitadis não forem números!!!')

            } else{

                resultado = matematica.calculadora(valor1, valor2, operacao)

                if(resultado === false )
                    entradaDeDados.close()
                else{
                    console.log(resultado)
                    

                }
                

                    
                


            }

        })
    })
})