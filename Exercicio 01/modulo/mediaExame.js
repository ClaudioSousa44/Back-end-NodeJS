/* 
- Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade
- Data: 10/02/2023
- Autor: Claudio Sousa
- Versão: 1.0
*/


const mediaExame = (media, nota) => {

    const mediaAntiga = media
    const notaExame = parseFloat(nota)

    let mediaFinal = (mediaAntiga + notaExame) / 2

    return mediaFinal 



}


module.exports = {
    mediaExame
}