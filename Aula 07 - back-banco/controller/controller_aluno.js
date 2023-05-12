/*
- Objetivo: Responsavel pela regra de negócio referente ao CRUD de ALUNOS
- Data: 14/04/2023
- Autor: Claudio Sousa
- Versão: 1.0 
*/

//import do arquivo DAO para acessar dados do aluno no BD
const alunosDAO = require('../model/DAO/alunoDAO.js');

const config = require('./modulo/config.js');
const alunoDAO = require('../model/DAO/alunoDAO.js');


//inserer novo aluno
const inserirAluno = async (dadosAluno) => {

    if(
        dadosAluno.nome == ''      || dadosAluno.nome == undefined       || dadosAluno.nome.length > 100     ||
        dadosAluno.rg == ''        ||  dadosAluno.rg == undefined        || dadosAluno.rg.length > 15        ||
        dadosAluno.cpf == ''       ||  dadosAluno.cpf == undefined       || dadosAluno.cpf.length > 18       || 
        dadosAluno.data_nasc == '' ||  dadosAluno.data_nasc == undefined || dadosAluno.data_nasc.length > 10 ||
        dadosAluno.email == ''     ||  dadosAluno.email == undefined     || dadosAluno.email.length > 255       
    ){
        return config.ERROR_REQUIRED_FIELDS
    }else{
        let resultDadosAlunos = await alunosDAO.insertAlunos(dadosAluno);
        if(resultDadosAlunos){
            let novoIdAluno = await alunosDAO.selectLastID();
            let dadosAlunosJSON = {};
            dadosAlunosJSON.status = config.SUCCESS_CREATED_ITEM.status
            dadosAlunosJSON.aluno = novoIdAluno
            return  dadosAlunosJSON
        }else{
            return config.ERROR_INTERNAL_SERVER
        }
    }

}

//atualizar aluno 
const atualizarAluno = async (dadosAluno, idAluno) => {

    if(
        dadosAluno.nome == ''      || dadosAluno.nome == undefined       || dadosAluno.nome.length > 100     ||
        dadosAluno.rg == ''        ||  dadosAluno.rg == undefined        || dadosAluno.rg.length > 15        ||
        dadosAluno.cpf == ''       ||  dadosAluno.cpf == undefined       || dadosAluno.cpf.length > 18       || 
        dadosAluno.data_nasc == '' ||  dadosAluno.data_nasc == undefined || dadosAluno.data_nasc.length > 10 ||
        dadosAluno.email == ''     ||  dadosAluno.email == undefined     || dadosAluno.email.length > 255       
    
    ){

        return config.ERROR_REQUIRED_FIELDS
    
    }else if(idAluno == '' || idAluno == undefined || isNaN(idAluno)){

        return config.ERROR_INVALID_ID;

    }else{

        dadosAluno.id = idAluno

        let resultDadosAlunos = await alunoDAO.updateAlunos(dadosAluno);

        if(resultDadosAlunos){
            let novoAluno = await alunosDAO.selectByIdAlunos(idAluno);
            let dadosAlunosJSON = {};
            dadosAlunosJSON.status = config.SUCCESS_UPDATED_ITEM .status
            dadosAlunosJSON.aluno = novoAluno
            return  dadosAlunosJSON
            
        }else{
            return config.ERROR_INTERNAL_SERVER
        }

    }

}

//Excluir aluno
const deletarAluno = async (id) => {

    
        let result = await getBuscarAlunoID(id)
        console.log(result)

        if(result.status == undefined ){
            
            let resultDadosAlunos = await alunoDAO.deleteAlunos(id);

            if(resultDadosAlunos){
                return config.SUCCESS_DELETED_ITEM   
            }else{
                return config.ERROR_INTERNAL_SERVER
            }
        }else{
            return result
        

    }

            
}

//Retorna todos os alunos
const getAlunos = async () => {
    let dadosAlunosJSON = {};
    //chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunosDAO.selectAllAlunos()

    if(dadosAluno){
        //criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.status = config.SUCCESS_RESQUEST.status
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    }else{
        return config.ERROR_REGISTER_NOT_FOUND;
    }
}

//Retorna o aluno
const getBuscarAlunoID = async (id) => {
    let dadosAlunosJSON = {};

    if(id == '' || id == undefined || isNaN(id)){
        return config.ERROR_INVALID_ID
    }else {
    let dadosAluno = await alunosDAO.selectByIdAlunos(id)

    if(dadosAluno){
        dadosAlunosJSON.status = config.SUCCESS_RESQUEST.status  
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    }else{
        return config.ERROR_REGISTER_NOT_FOUND;
    }
    }

    
}

const getBuscarAlunoNome = async (nome) => {
    let dadosAlunosJSON = {};

    if(nome == '' || nome == undefined || !isNaN(nome)){
        return config.ERROR_INVALID_NAME
    }else{
        let dadosAluno = await alunosDAO.selectByNameAlunos(nome)

        if(dadosAluno){
        dadosAlunosJSON.status = config.SUCCESS_RESQUEST.status  
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
        }else{
        return config.ERROR_NAME_NOT_FOUND;
        }
    }
    
}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    getBuscarAlunoNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}