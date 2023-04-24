/*
- Objetivo: Responsável pela manipulação de dados dos alunos no banco de dados
- Data: 14/04/2023
- Autor: Claudio Sousa
- Versão: 1.0 
*/

//import da biblioteca do prisma client
let { PrismaClient } = require('@prisma/client');

//Instância da classe prisma client
let prisma = new PrismaClient();

//Inserir dados do aluno banco de dados
const insertAlunos = (dadosAluno) => {

}

//Atualizar dados do aluno banco de dados
const updateAlunos = (dadosAluno) => {

}

//Deletar dados do aluno banco de dados
const deleteAlunos = (id) => {

}

//Retorna dados de todos aluno banco de dados
const selectAllAlunos = async () => {
    
    //Escrevendo o script que sera rodado
    let sql = 'select * from tbl_aluno';

    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQl
    //$queryRaw('Select * from tbl_aluno)
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    //validar se o BD retornou objetos
    if(rsAluno.length > 0){
        return rsAluno;
    }else{
        return false;
    }

};

//Retorna a aluno pelo id
const selectByIdAlunos = async (id) => {

    let sql = `select * from tbl_aluno where id= ${id}`

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if(rsAluno.length > 0){
        return rsAluno;
    }else{
        return false;
    }

}

const selectByNameAlunos = async (nome) => {

    let sql = `select * from tbl_aluno where nome like '%${nome}%' `

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if(rsAluno.length > 0){
        return rsAluno;
    }else{
        return false;
    }

}

module.exports = {
    selectAllAlunos,
    selectByIdAlunos,
    selectByNameAlunos
}