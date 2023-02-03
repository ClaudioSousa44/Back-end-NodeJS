/* 
* Objetivo: arquivo de funções para cálculos matemáticos
* Data: 03/03/2023
* Autor: Claudio Sousa
* Versão: 1.0
*/

//Função tradicional
function calculadora (num1, num2, tipoCalc) {

    let valor1 = parseFloat(num1)
    let valor2 = parseFloat(num2)
    let operacao = tipoCalc.toUpperCase()
    let resultado

    if (operacao == 'SOMAR'){
        resultado = valor1 + valor2

      } else if (operacao == 'SUBTRAIR') {
          resultado =  valor1 - valor2

      } else if(operacao == 'MULTIPLICAR'){
          resultado =  valor1 * valor2

      } else if(operacao == 'DIVIDIR'){
         
          if(valor2 == 0){
              console.log('ERRO: Não é possivel realizar a divisão por zero!')
              
          }
          

          resultado =  parseFloat(valor1) / parseFloat(valor2)
      }else{
          console.log('ERRO: A escolhade de operação foi inválida!')
          entradaDeDados.close()


      }
          

      if(resultado == undefined){
        return false
          
      }else
      return resultado
    

   }

   module.exports = {
       calculadora
   }

