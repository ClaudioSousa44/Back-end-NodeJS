const estadosCidades = require("./estados_cidades.js");

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
        if(estado.sigla.toUpperCase() == siglaEstado.toUpperCase()){
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
        if(estado.sigla.toUpperCase() == siglaEstado.toUpperCase()){
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

const getEstadoRegiao = (regiao, listaDeEstados) => {
    let listEstadoRegiao = {};
    let arrayEstados = [];    
    let status = false;

    listaDeEstados.estados.forEach((estado) => {
        if(estado.regiao.toUpperCase() == regiao.toUpperCase()){
            let listUfNome = {};
            
            listUfNome.uf = estado.sigla;
            listUfNome.descricao = estado.nome;
            // listUfNome = {uf: estado.sigla, descricao: estado.nome}
            arrayEstados.push(listUfNome);
        
            status = true;        
        }
    })

    if(status){
        listEstadoRegiao.regiao = regiao;
        listEstadoRegiao.estados = arrayEstados;
        return listEstadoRegiao;

    }else{
        return status;
    }
   
}

// console.log(getEstadoRegiao("Sudeste", estadosCidades.estadosCidades))


const getCapitalPais = (listaDeEstados) => {
    let listCapital = {};
    let arrayCapital = [];
    let status = false;
    

    listaDeEstados.estados.forEach((capital) => {
        let listCheckCapital = {};
        if(capital.capital_pais != undefined){
            listCheckCapital.capital_atual = capital.capital_pais.capital;
            listCheckCapital.uf = capital.sigla;
            listCheckCapital.descricao = capital.nome;
            listCheckCapital.capital = capital.capital;
            listCheckCapital.regiao = capital.regiao;
            listCheckCapital.capital_pais_ano_inicio = capital.capital_pais.ano_inicio;
            listCheckCapital.capital_pais_ano_termino = capital.capital_pais.ano_termino;
            arrayCapital.push(listCheckCapital);
            status = true;

        }
        
    })

    if(status){
        listCapital.capitais = arrayCapital;
        return listCapital;
    }else{
        return status;
    }
   
}

// console.log(getCapitalPais(estadosCidades.estadosCidades));

const getCidades = (sigla, listaDeEstados) => {
    let listCidadesJson = {};
    let arrayCidades = [];
    let status = false;

    listaDeEstados.estados.forEach((cidade) => {
        if(cidade.sigla.toUpperCase() == sigla.toUpperCase()){
            listCidadesJson.uf = cidade.sigla;
            listCidadesJson.descricao = cidade.nome;
            cidade.cidades.forEach((nomeCidade)=> {
                arrayCidades.push(nomeCidade.nome);
            })
            
            status = true;

        }
    })

    if(status){
        listCidadesJson.quantidade_cidades = arrayCidades.length;
        listCidadesJson.cidades = arrayCidades
        return listCidadesJson
    }else{
        return status;
    }
}

// console.log(getCidades("AC", estadosCidades.estadosCidades));

module.exports = {
    getListaDeEstados,
    getEstadoRegiao,
    getDadosEstado,
    getCidades,
    getCapitalPais,
    getCapitalEstado
}