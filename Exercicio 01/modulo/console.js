/* 
- Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade
- Data: 10/02/2023
- Autor: Claudio Sousa
- Versão: 1.0
*/



const exibir = (sexoAluno, nomeA, statusfinal, nomeDisciplina, nomeC, sexoProf, nomeProff, num1, num2, num3, num4, resMedia) => {

    let sexA = sexoAluno
    let nomeAluno = nomeA
    let status = statusfinal
    let nomeDisc = nomeDisciplina
    let nomeCurso = nomeC
    let sexP = sexoProf
    let nomeProf = nomeProff
    let nota1 = num1
    let nota2 = num2
    let nota3 = num3
    let nota4 = num4
    let resultadoMedia = resMedia




    console.log(
        sexA + ' ' + nomeAluno + ' Foi ' + status + ' na disciplina ' + nomeDisc + '\n' +
        'Curso: ' + nomeCurso + '\n' +
        sexP + ' : ' + nomeProf + '\n' +
        'Notas do Aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4 + '\n' +
        'Media Final: ' + resultadoMedia

    )
}


module.exports = {
    exibir
}