/* 
- Objetivo: Arquivo de funções para calcularuma tabuada
- Data: 06/02/2023
- Autor: Claudio Sousa
- Versão: 1.0
*/

const getTabuada = (multiplicando, maxMultiplicador) => {

    let tabuada = parseFloat(String(multiplicando).replace(",",".")) 
    let tabuadaContador = parseFloat(String(maxMultiplicador).replace(",","."))
    let status = true
    let resultado
    let cont = 0

    if (tabuada == 0 || tabuadaContador == 0) {

        status = false

    } else if (isNaN(tabuada) || isNaN(tabuadaContador)) {

        status = false

    } else {

       

        //2X0=0
        while (cont <= tabuadaContador) {
            resultado = tabuada * cont
            console.log(`${tabuada} x ${cont} = ${resultado}`)
            cont += 1

        }


    }

    return status

}

getTabuada(5.5 ,10)


module.exports = {
    getTabuada
}