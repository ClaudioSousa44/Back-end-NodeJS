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
const { request, response } = require('express');
//import do arquivo no modulo (json)
const estadosCidades = require('./modulo/estados_cidades.js');
 //import das funções
 const func = require('./modulo/index.js');

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
    //Chama a função passondo os parâmetros
    let estados = func.getListaDeEstados( estadosCidades.estadosCidades);

    //Tratamento para validar o sucesso da requisição
    if(estados){
        response.status(200);
        response.json(estados);
    }else{
        response.status(500);
    }

    
});

//EndPoint para listar dados dos estados
app.get('/estado/:uf', cors(), async (request, response, next) => {
    //Recebe a sigla do estado que sera enviada pela URL da requisição
    let siglaEstado = request.params.uf;

    let statusCode;
    let dadosEstados = {};
    
    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400;
        dadosEstados.message = 'não foi possivel processar, pois os dados de entrada (uf) que foi enviado, não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres, e precisa ter 2 digitos'
    }else {
        let estado = func.getDadosEstado(siglaEstado, estadosCidades.estadosCidades);

        if(estado){
            statusCode = 200;
            dadosEstados = estado;
        }else{
            statusCode = 404;
        }   
    }

    response.status(statusCode);
    response.json(dadosEstados);
})

app.get('/capital/:uf', cors(), async (request, response, next) => {
    //Recebe a sigla do estado que sera enviada pela URL da requisição
    let siglaEstado = request.params.uf;

    let statusCode;
    let dadosEstados = {};
    
    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400;
        dadosEstados.message = 'não foi possivel processar, pois os dados de entrada (regiao) que foi enviado, não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres, e precisa ter 2 digitos'
    }else {
        let estado = func.getCapitalEstado(siglaEstado, estadosCidades.estadosCidades);

        if(estado){
            statusCode = 200;
            dadosEstados = estado;
        }else{
            statusCode = 404;
        }   
    }

    response.status(statusCode);
    response.json(dadosEstados);
});

app.get('/estadosregioes/:regiao', cors(), async (request, response, next) => {
    let regiaoEstado = request.params.regiao;

    let statusCode;
    let dadosEstados;

    if(regiaoEstado == '' || regiaoEstado == undefined || !isNaN(regiaoEstado)){
        statusCode = 400;
        dadosEstados.message = 'não foi possivel processar, pois os dados de entrada (uf) que foi enviado, não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres'
    }else{
        let estado = func.getEstadoRegiao(regiaoEstado, estadosCidades.estadosCidades);

        if(estado){
            statusCode = 200;
            dadosEstados = estado;
        }else{
            statusCode = 404
        }
    }

    response.status(statusCode);
    response.json(dadosEstados);
});

app.get('/capitalpais', cors(), async( request,response, next) => {
    let statusCode;
    let dadosEstados = {};

    let capitais = func.getCapitalPais(estadosCidades.estadosCidades);
    if(capitais){
        statusCode = 200;
        dadosEstados = capitais;
    }else{
        statusCode = 404
    }

    response.status(statusCode);
    response.json(dadosEstados);
});

app.get('/cidadeestado/:uf', cors(), async(request, response, next) => {
    let siglaEstado = request.params.uf;

    let statusCode;
    let dadosEstados = {};

    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400;
        dadosEstados.message = 'não foi possivel processar, pois os dados de entrada (regiao) que foi enviado, não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres, e precisa ter 2 digitos'
    }else {
        let estado = func.getCidades(siglaEstado, estadosCidades.estadosCidades);

        if(estado){
            statusCode = 200;
            dadosEstados = estado;
        }else{
            statusCode = 404;
        }   
    }

    response.status(statusCode);
    response.json(dadosEstados);
    
});

app.get('/v1/senai/cidades', cors(), async(request, response, next) => {
   /*
   Existem duas opções para receber variáveis para filtro:
   params: que permite receber a variável na estrutura da URL criada no endPoint (geralmente utilizado para ID (pk))
   
   query: permite receber uma ou muitas variáveis para realizar filtros avançado
   */
   
    //Recebe uma variavel via query string
    let siglaEstado = request.query.uf;
    
    let statusCode;
    let dadosEstados = {};

    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400;
        dadosEstados.message = 'não foi possivel processar, pois os dados de entrada (regiao) que foi enviado, não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres, e precisa ter 2 digitos'
    }else {
        let estado = func.getCidades(siglaEstado, estadosCidades.estadosCidades);

        if(estado){
            statusCode = 200;
            dadosEstados = estado;
        }else{
            statusCode = 404;
        }   
    }

    response.status(statusCode);
    response.json(dadosEstados);
    
})



//Roda o serviço da API para ficar aguardando requisições 
app.listen(8080, () => {
    console.log('rodo');
    
})
