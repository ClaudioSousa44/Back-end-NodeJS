/* 
 * Objetivo: arquivo de funções para cálculos matemáticos
 * Data: 03/03/2023
 * Autor: Claudio Sousa
 * Versão: 1.0
 */

//Função tradicional
// function calculadora (num1, num2, tipoCalc) {

//     let valor1 = parseFloat(num1)
//     let valor2 = parseFloat(num2)
//     let operacao = tipoCalc.toUpperCase()
//     let resultado
//     let status = true;

//     if (operacao == 'SOMAR'){
//         resultado = valor1 + valor2

//       } else if (operacao == 'SUBTRAIR') {
//           resultado =  valor1 - valor2

//       } else if(operacao == 'MULTIPLICAR'){
//           resultado =  valor1 * valor2

//       } else if(operacao == 'DIVIDIR'){

//           if(valor2 == 0){
//               console.log('ERRO: Não é possivel realizar a divisão por zero!')
//               status = false

//           }else
//           resultado = valor1 / valor2





//       }else{
//           console.log('ERRO: A escolhade de operação foi inválida!')
//           status =  false


//       }


//       if(resultado == undefined || status == false){
//         return false

//       }else
//       return resultado


//    }


//Função mais utilizada
const calculadora = function (num1, num2, tipoCalc) {

    let valor1 = parseFloat(num1)
    let valor2 = parseFloat(num2)
    let operacao = tipoCalc.toUpperCase()
    let resultado
    let status = true;

    // if (operacao == 'SOMAR'){
    //     resultado = valor1 + valor2

    //   } else if (operacao == 'SUBTRAIR') {
    //       resultado =  valor1 - valor2

    //   } else if(operacao == 'MULTIPLICAR'){
    //       resultado =  valor1 * valor2

    //   } else if(operacao == 'DIVIDIR'){

    //       if(valor2 == 0){
    //           console.log('ERRO: Não é possivel realizar a divisão por zero!')
    //           status = false

    //       }else
    //       resultado = valor1 / valor2





    //   }else{
    //       console.log('ERRO: A escolhade de operação foi inválida!')
    //       status =  false


    //   }

    switch (operacao) {

        case 'SOMAR':
            resultado = somar(valor1 , valor2)
            break

        case 'SUBTRAIR':
            resultado =  subtrair(valor1 , valor2)
            break

        case 'MULTIPLICAR':
            resultado = multiplicar(valor1 , valor2)
            break

        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('ERRO: Não é possivel realizar a divisão por zero!')
                status = false
                break

            } else
                resultado = dividir(valor1 , valor2) 
            break
        
        default:
            console.log('ERRO: A escolhade de operação foi inválida!')
           status =  false



    }


    if (resultado == undefined || status == false) {
        return false

    } else
        return resultado.toFixed(2)
}

//função Arrow function
const somar = (valor1, valor2) => number(valor1) + number(valor2) 
const subtrair = (valor1, valor2) => number(valor1) - number(valor2)
const multiplicar = (valor1, valor2) => number(valor1) * number(valor2)
const dividir = (valor1, valor2) => number(valor1) / number(valor2)












module.exports = {
    calculadora
}