/* 
- Objetivo: Criar um sistema que gerencie números pares e impares
- Data: 13/02/2023
- Autor: Claudio Sousa
- Versão: 1.0
*/


const calcular = (menorNum, maiorNum, resUsu) => {

    let minMult = parseFloat(String(menorNum).replace(',', '.'))
    let maxMult = parseFloat(String(maiorNum).replace(',', '.'))
    let respostaUsu = parseInt(resUsu)

    let resPar
    let resImpar
    let res

    if (String(minMult) == '' || minMult < 0 || minMult > 500) {

        return console.log('O número inicial deve estar entre 0 e 50')

    } else if (maxMult > 1000 || maxMult < 100) {

        return console.log('O número final deve estar entre 100 e 1000')

    } else if (minMult >= maxMult) {

        return console.log('O número inicial não pode ser maior nem igual ao número final')

    } else if (respostaUsu < 1 || respostaUsu > 3) {

        return console.log('Escolha o que voce deseja exibir com os números entre 1 e 3')

    } else {

        let contador = minMult

        resPar =0

        if (respostaUsu == 1) {

            console.log('Par')

            while (minMult <= maxMult) {

                res = minMult

                if ((res % 2) === 0) {

                    console.log(res)
                    resPar += 1

                }

                minMult += 1

            }

            console.log('Quantidade de números pares: ' + resPar)

        } else if (respostaUsu == 2) {

            resImpar = 0

            console.log('Impar')

            minMult = contador

            while (minMult <= maxMult) {

                res = minMult

                if ((res % 2) !== 0) {

                    console.log(res)
                    resImpar += 1

                }

                minMult += 1

            }

            console.log('Quantidade de números impares: ' + resImpar)

        }else{

            let contador = minMult

            resPar = 0


            console.log('Par')

            while (minMult <= maxMult) {

                res = minMult

                if ((res % 2) === 0) {

                    console.log(res)
                    resPar += 1

                }

                minMult += 1

            }

            console.log( 'Quantidade de números pares: ' +resPar)

            resImpar = 0

            console.log('Impar')

            minMult = contador

            while (minMult <= maxMult) {

                res = minMult

                if ((res % 2) !== 0) {

                    console.log(res)
                    resImpar += 1

                }

                minMult += 1

            }

            console.log('Quantidade de números impares: ' +resImpar)
        }
    }
}

module.exports = {
    calcular
}