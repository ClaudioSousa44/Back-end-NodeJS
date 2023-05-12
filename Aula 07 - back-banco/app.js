/*
- Objetivo: API para integração entre back e banco de dados (GET, POST, PUT, DELETE)
- Data: 14/04/2023
- Autor: Claudio Sousa
- Versão: 1.0 
*/

//import das bibliotecas para API
const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const { request, response } = require('express');

const config = require('../Aula 07 - back-banco/controller/modulo/config.js')

//cria o objeto app
const app = express();

//Usando o bodyParse no padrão json
const  bodyParseJSON = bodyParse.json();


//definir as permissões do cors
app.use((request, response, next) => {
    //Defini quem poderá acessar a API (* = todos)
    response.header('Access-Control-Allow-Origin', '*');
    //Define quais metodos serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Atribui as permissões ao cors
    app.use(cors());

    next();

});

//CRUD (Create, Read, Update, Delete)

/* 
- Objetivo: API de controle de  alunos
- Data: 14/04/2023
- Autor: Claudio Sousa
- Versão: 1.0 
*/
const controllerAluno = require('./controller/controller_aluno.js');

// ENDPOINT - ALUNOS

//EndPoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async (request,response) => {
    

    let dadosAluno = await controllerAluno.getAlunos();
    response.status(dadosAluno.status);
    response.json(dadosAluno)


    });

//EndPoint: Retorna o aluno filtrando por ID
    app.get('/v1/lion-school/aluno/:id', cors(), async (request,response) => {
    let id = request.params.id
    
    let aluno = await controllerAluno.getBuscarAlunoID(id);
    console.log(aluno)

    response.status(aluno.status);
    response.json(aluno);
    
    });

    app.get('/v1/lion-school/aluno/nome/:nome', cors(), async (request,response) => {
    let nome = request.params.nome
   
    // if(nome == '' || nome == undefined || !isNaN(nome)){
    //     statusCode = 400
    //     dadosAluno.message = 'Preencha o nome com letras'
   
        let aluno = await controllerAluno.getBuscarAlunoNome(nome);
    response.status(aluno.status);
    response.json(aluno);
    

    });

//EndPoint: Insere um dado novo
    app.post('/v1/lion-school/aluno', cors(), bodyParseJSON, async (request,response) => {

    let contentType = request.headers['content-type']

    if(String(contentType).toLocaleLowerCase() == 'application/json'){
    //Recebe os dados encaminhados na requisição
    let dadosBody = request.body;

   let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody);

   response.status(resultDadosAluno.status);
   response.json(resultDadosAluno) 
}else {
    response.status(config.ERROR_INVALID_CONTENT_TYPE.status)
    response.json(config.ERROR_INVALID_CONTENT_TYPE)
}


    });

//EndPoint: Atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), bodyParseJSON, async (request,response) => {

    let contentType = request.headers['content-type']

    if(String(contentType).toLocaleLowerCase() == 'application/json'){
    //Recebe o id do aluno
    let alunoId = request.params.id;
    //Recebe os dados do aluno que são encaminhados pelo corpo da requisição
    let dadosBody = request.body

    let resultDadosAluno = await controllerAluno.atualizarAluno(dadosBody, alunoId)

    response.status(resultDadosAluno.status)
    response.json(resultDadosAluno)
    
    } else {
        response.status(config.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(config.ERROR_INVALID_CONTENT_TYPE)
    }

    });

//EndPoint: Exclui um aluno, filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async (request,response) => {

    let id = request.params.id

    let resultDadosAluno = await controllerAluno.deletarAluno(id)

    response.status(resultDadosAluno.status)
    response.json(resultDadosAluno)

    });

app.listen(8080, () => {
    console.log('rodo');
    
})