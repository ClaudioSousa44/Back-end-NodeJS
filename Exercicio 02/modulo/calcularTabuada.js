/* 
- Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
- Data: 13/02/2023
- Autor: Claudio Sousa
- Versão: 1.0
*/

const tabuada = (multiplicandoUm, multiplicandoDois ,minMultiplicador, maxMultiplicador) => {

    let multiplicando1 = parseFloat(String(multiplicandoUm).replace(',','.'))
    let multiplicando2 = parseFloat(String(multiplicandoDois).replace(',','.'))  
    let menorMultiplicador = parseFloat(String(minMultiplicador).replace(',','.'))
    let maiorMultiplicador = parseFloat(String(maxMultiplicador).replace(',','.'))


    if ( multiplicando2 == 0  || maiorMultiplicador == 0 || menorMultiplicador == 0 || multiplicando1 == 0){

        return console.log('Por favor, preencha todos os campos!!!')

    }else if (isNaN(multiplicando1)  || isNaN(menorMultiplicador) || isNaN(maiorMultiplicador)){

        return console.log('Por favor, coloque apenas números!!!')

    }else if(multiplicando1 < 2 || multiplicando1 > 100 || multiplicando2 < 1 || multiplicando2 > 200 ){

        return console.log('Os multiplicadores devem estar entre 2 e 200')


    }else if(menorMultiplicador > 50 || menorMultiplicador < 1 || maiorMultiplicador > 50 || maiorMultiplicador < 1 ){

        return console.log('Os multiplicadores devem estar entre 1 e 50')

    }else if ( menorMultiplicador > maiorMultiplicador || multiplicando1 > multiplicando2){

        return console.log('O maior multiplicador não pode ser menor que o menor multiplicador!!!')

    }else if (parseFloat(maiorMultiplicador) == 0){

        return console.log('O maior multiplicador não pode ser 0!!!')

    } else {

        let resMult

        let menorMultiplicadorT = menorMultiplicador

        while(multiplicando1 <= multiplicando2){


            menorMultiplicador = menorMultiplicadorT

            console.log(` \n Tabuada do [${multiplicando1}] `)

            while(menorMultiplicador <= maiorMultiplicador){
                resMult = multiplicando1 * menorMultiplicador
                console.log(`${multiplicando1}  X  ${menorMultiplicador} = ${resMult} `)
                menorMultiplicador += 1

            }


            
            multiplicando1 += 1

           
            
            
            

          
        }

        


    }


}




module.exports = {
    tabuada
}


/*
while(menorMultiplicador <= maiorMultiplicador){
    resultado = multiplicando2 * menorMultiplicador
    console.log(`${multiplicando2}  X  ${menorMultiplicador} = ${resultado}`)
    menorMultiplicador += 1
}
*/