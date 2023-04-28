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

//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async (request,response) => {
    

    let dadosAluno = await controllerAluno.getAlunos();

    if(dadosAluno){
        response.json(dadosAluno);
        response.status(200);
    }else {
        response.json();
        response.status(404)
    }

});

//EndPoint: Retorna o aluno filtrando por ID
app.get('/v1/lion-school/aluno/:id', cors(), async (request,response) => {
    let id = request.params.id
    let statusCode;
    let dadosAluno = {};

    if(id == '' || id == undefined || isNaN(id)){
        statusCode = 400
        dadosAluno.message = 'Preencha o id com números'
    } else {
        let aluno = await controllerAluno.getBuscarAlunoID(id);

        if(aluno){
            statusCode = 200;
            dadosAluno = aluno
        }else{
            statusCode = 404
        }
    }

    response.status(statusCode);
    response.json(dadosAluno);
    

});

app.get('/v1/lion-school/aluno/nome/:nome', cors(), async (request,response) => {
    let nome = request.params.nome
    let statusCode;
    let dadosAluno = {};

    if(nome == '' || nome == undefined || !isNaN(nome)){
        statusCode = 400
        dadosAluno.message = 'Preencha o nome com letras'
    } else {
        let aluno = await controllerAluno.getBuscarAlunoNome(nome);

        if(aluno){
            statusCode = 200;
            dadosAluno = aluno
        }else{
            statusCode = 404
        }
    }

    response.status(statusCode);
    response.json(dadosAluno);
    

});

//EndPoint: Insere um dado novo
app.post('/v1/lion-school/aluno', cors(), bodyParseJSON, async (request,response) => {

    //Recebe os dados encaminhados na requisição
    let dadosBody = request.body;

   let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody);

   response.status(resultDadosAluno.status);
   response.json(resultDadosAluno) 

});

//EndPoint: Atualiza um aluno existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async (request,response) => {


});

//EndPoint: Exclui um aluno, filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async (request,response) => {


});

app.listen(8080, () => {
    console.log('rodo');
    
})