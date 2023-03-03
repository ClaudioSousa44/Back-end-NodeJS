const estadosCidades = require("./estados_cidades");

const getListaDeEstados = (listaDeEstados) => {
    let listEstados = {};
    let arrayUf = [];
    let status = false;

    listaDeEstados.estados.forEach((estado) => {

        arrayUf.push(estado.sigla);
        status = true;

    });

    if (status) {
        listEstados.uf = arrayUf;
        listEstados.quantidade = arrayUf.length;
        return listEstados;
    }else {
        return status;
    }
}


const getDadosEstado = (siglaEstado, listaDeEstados) => {
    let listDadosEstado = {};
    let status = false;

    listaDeEstados.estados.forEach((estado) => {
        if(estado.sigla == siglaEstado.toUpperCase()){
            listDadosEstado.uf = siglaEstado;
            listDadosEstado.descricao = estado.nome;
            listDadosEstado.capital = estado.capital;
            listDadosEstado.regiao = estado.regiao;
            status = true
        }
    })

    if(status){
        return listDadosEstado
    }else{
        return status
    }

}


const getCapitalEstado = (siglaEstado, listaDeEstados) => {
    let listDadosEstado = {};
    let status = false;

    listaDeEstados.estados.forEach((estado) => {
        if(estado.sigla == siglaEstado.toUpperCase()){
            listDadosEstado.uf = siglaEstado;
            listDadosEstado.descricao = estado.nome;
            listDadosEstado.capital = estado.capital;
            status = true
        }
    })

    if(status){
        return listDadosEstado
    }else{
        return status
    }

}





