/*
* Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
* Autor: Claudio Sousa
* Data: 10/03/2023
* Versão: 1.0
*/

/*
* Express - dependencia para realizar requisições de API pelo protocolo HTTP
*     npm install express --save 
*
* Cors - dependencia para gerenciar permissões de requisição da API
*       npm install cors --save
*
* Body-Parser - dependencia que gerencia o corpo das requisições
*       npm install body-parser --save
*/

//Import das dependencias do projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Cria um objeto com as caracteristicas do express
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

//EndPoint para listar estados
app.get('/estados', cors(), async (request,response,next) => {
    const estadosCidades = require('./modulo/estados_cidades.js');
    const func = require('./modulo/index.js')
    let estados = func.getCidades('SP', estadosCidades.estadosCidades)
    response.status(200);
    response.json(estados);
});;

app.listen(8080, () => {
    console.log('rodo');
    
})
