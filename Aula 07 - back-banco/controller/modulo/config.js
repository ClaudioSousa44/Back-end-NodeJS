/*
- Objetivo: Arquivo responsável por padronizar as mensagens de ERRO, SUCESSO, Funções, Variáveis para o projeto
- Data: 28/04/2023
- Autor: Claudio Sousa
- Versão: 1.0 
*/

//Mensagens de erro
const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos.'};
const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor, não foi possivel processar a requisição'}

//Mensagem de sucesso
const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso.'}

module.exports ={
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER
}