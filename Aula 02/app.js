/*
* Objetivo: Calcular a média de 4 notas escolares.
* Autor: Claudio Sousa
* Data: 27/01/2023
* Versão: 1.0
*/

var readline = require('readline');
const { type } = require('os');


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDeDados.question('Digite seu nome: \n', function(nome){
    let nomeAluno = nome ; 
    
    entradaDeDados.question('Digite a primeira nota: \n', function(nota1){
        let nota1Aluno = nota1;

        entradaDeDados.question('Digite a segunda nota: \n', function(nota2){
            let nota2Aluno = nota2;

            entradaDeDados.question('Digite a terceira nota: \n', function(nota3){
                let nota3Aluno = nota3;

                entradaDeDados.question('Digite a quarta nota: \n', function(nota4){
                    let nota4Aluno = nota4;

                    if(nota1Aluno == '' || nota2Aluno == '' || nota3Aluno == '' || nota4Aluno == ''){
                        console.log('Erro: Você deixou algum valor vazio!')
                    }else if( isNaN(nota1Aluno) || isNaN(nota2Aluno)  || isNaN(nota3Aluno) || isNaN(nota4Aluno)){
                        console.log('Erro: Você colocou alguma letra!')
                    }
                    else{
                        let soma = parseFloat(nota1Aluno) + parseFloat(nota2Aluno) + parseFloat(nota3Aluno) + parseFloat(nota4Aluno)
                    let media = soma / 4; 
                    console.log('Seu nome é: ' + nome + '\n' +
                    'Sua primeira nota é: ' + nota1Aluno + '\n'+ 
                    'Sua segunda nota é: ' + nota2Aluno + '\n' +
                    'Sua terceira nota é: ' + nota3Aluno + '\n' +
                    'Sua quarta nota é: ' + nota4Aluno + '\n' +
                    'Sua média é: ' + media.toFixed(2) );

                    }

                    
                   
                })
            })
        })
    })
})


