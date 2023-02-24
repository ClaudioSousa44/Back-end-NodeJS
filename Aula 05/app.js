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

removerProduto('celula', listaProdutos)
