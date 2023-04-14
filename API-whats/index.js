/*
* Objetivo: Criar uma API para disponibilizar dados para o clone do whatsapp
* Autor: Claudio Sousa
* Data: 17/03/2023
* Versão: 1.0
*/



const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const func = require('./func.js');
const contatos = require('./contatos.js');

const app = express();

app.use((request, response, next) => {
    //API publica - Fica disponivel para utilizaçao de qualquer aplicação (*)
    //API privada - Somente o ip infomado poderá consumir dados da API (Número servidor)

    //Define se a API será publica ou privada
    response.header('Access-Control-Allow-Origin', '*');

    //Controlar os metodos
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //envia para o cors() as regras de permissões
    app.use(cors());

    next();

});

//EndPoints

app.get('/v1/whatsapp/perfil/id/:id', cors(), async (request,response,next) => {
    let idContato = request.params.id;
    let contatoslist = func.idCliente(idContato, contatos.contatos);

    if(contatoslist){
        response.status(200);
        response.json(contatoslist);
    }else{
        response.status(500);
    }
})


app.listen(8080, () => {
    console.log('rodo');
})



