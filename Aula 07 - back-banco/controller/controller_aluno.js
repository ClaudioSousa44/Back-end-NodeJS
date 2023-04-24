/*
- Objetivo: Responsavel pela regra de negócio referente ao CRUD de ALUNOS
- Data: 14/04/2023
- Autor: Claudio Sousa
- Versão: 1.0 
*/

//import do arquivo DAO para acessar dados do aluno no BD
let alunosDAO = require('../model/DAO/alunoDAO.js');



//inserer novo aluno
const inserirAluno = (dadosAluno) => {

}

//atualizar aluno 
const atualizarAluno = (dadosAluno) => {

}

//Excluir aluno
const deletarAluno = (id) => {

}

//Retorna todos os alunos
const getAlunos = async () => {
    let dadosAlunosJSON = {};
    //chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunosDAO.selectAllAlunos()

    if(dadosAluno){
        //criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    }else{
        return false;
    }
}

//Retorna o aluno
const getBuscarAlunoID = async (id) => {
    let dadosAlunosJSON = {};

    let dadosAluno = await alunosDAO.selectByIdAlunos(id)

    if(dadosAluno){
        
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    }else{
        return false;
    }
}

const getBuscarAlunoNome = async (nome) => {
    let dadosAlunosJSON = {};

    let dadosAluno = await alunosDAO.selectByNameAlunos(nome)

    if(dadosAluno){
        
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    }else{
        return false;
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    getBuscarAlunoNome
}