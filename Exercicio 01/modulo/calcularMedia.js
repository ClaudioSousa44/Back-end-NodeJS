/* 
- Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade
- Data: 10/02/2023
- Autor: Claudio Sousa
- Versão: 1.0
*/


const calcMedia = (nota1, nota2, nota3, nota4) => {

    const num1 = parseFloat(nota1)
    const num2 = parseFloat(nota2)
    const num3 = parseFloat(nota3)
    const num4 = parseFloat(nota4)

    let media = (num1 + num2 + num3 + num4) / 4

    

    return media

}

 module.exports ={
     calcMedia

 }