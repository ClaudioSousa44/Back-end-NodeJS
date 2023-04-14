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


//definir as permissões do cors
app.use((request, response, next) => {
    //Defini quem poderá acessar a API (* = todos)
    response.header('Acess-Control-Allow-Origin', '*');
    //Define quais metodos serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

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

//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async, (request,response) => {


});

//EndPoint: Retorna o aluno filtrando por ID
app.get('/v1/lion-school/aluno/:id', cors(), async, (request,response) => {


});

//EndPoint: Insere um dado novo
app.post('/v1/lion-school/aluno', cors(), async, (request,response) => {


});

//EndPoint: Atualiza um aluno existente, filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async, (request,response) => {


});

//EndPoint: Exclui um aluno, filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async, (request,response) => {


});

app.listen(8080, () => {
    console.log('rodo');
    
})