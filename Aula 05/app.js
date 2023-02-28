/*
* Objetivo -> Utilizar array
* Data -> 24/02/2023
* Autor -> Claudio Sousa
* Versão -> 1.0
*/

//[] - representa objeto do tipo array
//{} - representa um objeto do tipo JSON

const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']

const listaProdutos = ['celular', 'monitor', 'teclado', 'gabinete', 'hd', 'ssd']


/* 
* JSON é composto por chave (atributo) e valor
* {nome : 'josé', celular : '9343858343', email : 'jose@gmail.com'}

*/

const percorrerArray = () => {
    

console.table(listaNomes)

console.log(listaNomes.length)

//Percorrendo um array com while
let cont = 0
let quantItems = listaNomes.length


while(cont < quantItems){
    console.table(listaNomes[cont])
    cont += 1

}

//percorrendo um array com for
for( let cont = 0; cont < quantItems; cont += 1){
    console.table(listaNomes[cont])
}


//percorrendo um array com for each
listaNomes.forEach( (nome) => {
    console.log(nome)
})

}


const manipulandoDados = () => {
    //push
    listaProdutos.push('memória', 'gabinete')
    console.table(listaProdutos)

    //unshift
    listaProdutos.unshift('hd', 'placa-mãe', 'ssd')
    console.table(listaProdutos)

    //pop
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice
    const novosProdutos = listaProdutos.slice()
    console.log(novosProdutos)

    //index of
    console.log(listaProdutos.indexOf('ssd'))

    //Exemplo de utilização do index of

    if(listaProdutos.indexOf('celular') >= 0){
        console.log('item encontrado')
    }else {
        console.log('item não encontrado')
    }

}


const removerProduto = (nomeProduto, lista) => {
    let nome = nomeProduto
    let listaItemRemovido = lista.slice()
    let indice = listaItemRemovido.indexOf(nome)
    let status

    if(indice >= 0){
        listaItemRemovido.splice(indice, 1)
        status = listaItemRemovido
    }else {
        status = false
    }

    return console.log(status)

}

const listagemProdutos = () => {

    // let listProdutosJSON = 
    // {
    //     produtos : listaProdutos,
    //     clientes : listaNomes
    // }

//     let listProdutosJSON = {};

//     listProdutosJSON.produtos = listaProdutos;
//     listProdutosJSON.clientes = listaNomes;


//     console.log(listProdutosJSON);
//     console.log(listProdutosJSON.produtos[1]);
//     console.log(listProdutosJSON.clientes[5]);

let listProdutosJSON = {};
    let listProdutosArray = 
        [
            {
            nome : 'Monitor', 
            quantidade : 300 ,
            marca : 'Dell',
            valor : 1000,
            descricao : 'Monitor DELL ...',
            codigo : 1
        },
        {
            nome : 'Monitor', 
            quantidade : 200 ,
            marca : 'Lg',
            valor : 1300,
            descricao : 'Monitor DELL ...',
            codigo : 2
        },
        {
            nome : 'Teclado', 
            quantidade : 500 ,
            marca : 'Multilaser',
            valor : 600,
            descricao : 'Teclado Multilaser',
            codigo : 3
    
        },
        {
            nome : 'Teclado', 
            quantidade : 500 ,
            marca : 'Redragon',
            valor : 350,
            descricao : 'Teclado Redragon',
            codigo : 4
        },
        {
            nome : 'Teclado', 
            quantidade : 500 ,
            marca : 'Razer',
            valor : 1350,
            descricao : 'Teclado Razer',
            codigo : 5
        },
        {
            nome : 'Mouse', 
            quantidade : 660 ,
            marca : 'Logitech',
            valor : 450,
            descricao : 'Mouse Logitech',
            codigo : 6
        },
        {
            nome : 'Mouse', 
            quantidade : 660 ,
            marca : 'Hyperx',
            valor : 550,
            descricao : 'Mouse Hyperx',
            codigo : 7
        }
    
    ]

    let listCoresDellArray =['preto', 'branco', 'cinza'];
    let listCoresLgArray =['preto', 'cinza'];
    let listCoresTecladoArray = ['preto', 'branco','rosa','cinza','azul'];
    let listCoresMouseArray = ['preto', 'branco','rosa','cinza','azul','roxo','verde'];

    // let contCoresDell = listCoresDellArray.length;
    // let contCoresLG = listCoresLgArray.length;
    // let contCoresTeclado = listCoresTecladoArray.length;
    // let contCoresMouse = listCoresMouseArray.length;

    //array para modelos
    let listModelosMonitor = ['lcd', 'ips', 'oled', '4k', 'led'];
    let listModelosTeclado = ['mecânico', 'semi-mecânicos', 'membrana', 'optico']


    listProdutosJSON.produtos = listProdutosArray;  
    
    //adicionar cores ao monitor dell
    listProdutosJSON.produtos[0].cores = listCoresDellArray;
    listProdutosJSON.produtos[1].cores = listCoresLgArray;

    //cores para teclado
    listProdutosJSON.produtos[2].cores = listCoresTecladoArray;
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray;
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray;

    //cores para mouse
    listProdutosJSON.produtos[5].cores = listCoresMouseArray;
    listProdutosJSON.produtos[6].cores = listCoresMouseArray;

    //adicionar modelos aos monitores
    listProdutosJSON.produtos[0].modelo = listModelosMonitor;
    listProdutosJSON.produtos[1].modelo = listModelosMonitor;

    //adicionar modelos para teclados
    listProdutosJSON.produtos[2].modelo = listModelosTeclado;
    listProdutosJSON.produtos[3].modelo = listModelosTeclado;
    listProdutosJSON.produtos[4].modelo = listModelosTeclado;
       
    // console.log(listProdutosJSON)
    // console.log('nome: ' + listProdutosJSON.produtos[1].nome)
    // console.log('marca: ' + listProdutosJSON.produtos[1].marca)
    // console.log('valor: ' + listProdutosJSON.produtos[1].valor)
    // console.log('cores: ' + listProdutosJSON.produtos[1].cores[1])
    // console.log('modelos: ' + listProdutosJSON.produtos[1].modelo[1])

   
    let contIndexProduto = 0
    let contLengthArray = listProdutosArray.length;
    

    let resNome;
    let resMarca;
    let resValor;
    let contCor = 0;
    let reset = contCor;
    let contModelo = 0;


    while ( contIndexProduto < contLengthArray){

        contCor = reset;
        contModelo = reset;

        resNome =  listProdutosJSON.produtos[contIndexProduto].nome;
        resMarca =  listProdutosJSON.produtos[contIndexProduto].marca;
        resValor =  listProdutosJSON.produtos[contIndexProduto].valor;

        let teste = listProdutosJSON.produtos[contIndexProduto].cores[contCor].length;
        

        if (listProdutosJSON.produtos[contIndexProduto].nome == "Mouse") {
          console.log("não possui");
        } else {
            let teste2 =
              listProdutosJSON.produtos[contIndexProduto].modelo[contModelo]
                .length;
          while (contModelo < teste2) {
            let resModelo = [];
            resModelo.push(
              listProdutosJSON.produtos[contIndexProduto].modelo[contModelo]
            );
            contModelo += 1;
            console.log(resModelo);
          }
        }


        while( contCor < teste){

            let resCor = [];            

            // if(listProdutosJSON.produtos[contIndexProduto].cores[contCor] != undefined){
            //     resCor.push(
            //       listProdutosJSON.produtos[contIndexProduto].cores[contCor]
            //     );
              

            // }else{
            //      resCor.splice(undefined, 1)
                

            // }
            
            contCor += 1

            console.log(resCor)
        }

        

        

        console.log(resNome, resMarca, resValor)

        contIndexProduto += 1;

        
        
    }
    // console.log(listProdutosJSON.produtos[5].nome
      
    // );
  
}

listagemProdutos()