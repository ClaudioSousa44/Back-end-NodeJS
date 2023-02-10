/* 
- Objetivo: Criar um sistema que gerencie as médias escolares de uma 
universidade
- Data: 10/02/2023
- Autor: Claudio Sousa
- Versão: 1.0
*/

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var calcularMedia = require('./modulo/calcularMedia.js')

var exibirCon = require('./modulo/console')

var calcularExame = require('./modulo/mediaExame.js')
const mediaExame = require('./modulo/mediaExame.js')

entradaDeDados.question('Qual o nome do aluno? \n', function (nomeA) {

    let nomeAluno = nomeA

    if (nomeAluno == '') {
        console.log('Preencha o nome do Aluno')
        entradaDeDados.close()
    } else {
        console.log('1 - Masculino'+
                    ' 2 - Feminino')
        entradaDeDados.question('Qual o sexo do Aluno? \n', function (sexoA) {
            let sexoAluno = parseFloat(sexoA)
            if (sexoAluno == 0 || sexoAluno > 2 || sexoAluno < 1 || isNaN(sexoAluno)) {
                console.log('Preencha o sexo do Aluno com número entre 1 e 2')
                entradaDeDados.close()
            } else {
                entradaDeDados.question('Qual o nome do Professor? \n', function (nomeP) {
                    let nomeProf = nomeP
                    if (nomeProf == '' ) {
                        console.log('Preencha o nome do professor')
                        entradaDeDados.close()
                    } else {
                        console.log('1 - Masculino'+
                                    ' 2 - Feminino')
                        entradaDeDados.question('Qual o sexo do Professor? \n', function (sexoP) {
                            let sexoProfessor = parseFloat(sexoP)

                            if (sexoProfessor == 0 || sexoProfessor > 2 || sexoProfessor < 1 || isNaN(sexoProfessor)) {
                                console.log('Preencha o sexo do Professor com um número entre 1 e 2')
                                entradaDeDados.close()
                            } else {

                                entradaDeDados.question('Qual o nome do Curso? \n', function (curso) {
                                    let nomeCurso = curso

                                    if (nomeCurso == '') {
                                        console.log('Preencha o nome do Curso')
                                        entradaDeDados.close()
                                    } else {
                                        entradaDeDados.question('Qual o nome da Disciplina? \n', function (disc) {
                                            let nomeDisc = disc

                                            if (nomeDisc == '') {
                                                console.log('Preencha o nome da disciplina')
                                                entradaDeDados.close()
                                            } else {

                                                entradaDeDados.question('Digite a primeira nota \n', function(num1){
                                                    let nota1 = num1

                                                    entradaDeDados.question('Digite a segunda nota \n', function(num2){
                                                        let nota2 = num2

                                                        entradaDeDados.question('Digite a terceira nota \n', function(num3){
                                                            let nota3 = num3

                                                            entradaDeDados.question('Digite a quarta nota \n', function(num4){
                                                                let nota4 = num4


                                                                if( nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                                                                    console.log('preencha todas as notas')
                                                                    entradaDeDados.close()
                                                                }else if(parseFloat(nota1) > 100 || parseFloat(nota1) < 0 || parseFloat(nota2) > 100 || parseFloat(nota2) < 0 || 
                                                                parseFloat(nota3) > 100 || parseFloat(nota3) < 0 || parseFloat(nota4) > 100 || parseFloat(nota4) < 0){
                                                                    console.log('Preencha as notas apenas de 0 até 100')
                                                                    entradaDeDados.close()
                                                                } else{

                                                                    let resultadoMedia = calcularMedia.calcMedia(nota1,nota2,nota3,nota4)
                                                                    let ExibirLog
                                                                    let status
                                                                    let sexP
                                                                    let sexA

                                                                    if(sexoAluno == 1){
                                                                        sexA = 'O Aluno'
                                                                    }else{
                                                                        sexA = 'A Aluna'
                                                                    }

                                                                    if(sexoProfessor == 1){
                                                                        sexP = 'Professor'
                                                                    }else{
                                                                        sexP = 'Professora'
                                                                    }
 
                                                                    if (resultadoMedia >= 70){
                                                                        status = 'Aprovado'
                                                                        
                                                                        ExibirLog = exibirCon.exibir(sexA,nomeAluno,status,nomeDisc,nomeCurso,sexP,nomeProf,nota1, nota2,nota3,nota4,resultadoMedia  )
                                                                        




                                                                    }else if( resultadoMedia >= 50 && resultadoMedia < 70){
                                                                        entradaDeDados.question('Qual a nota do exame do aluno? \n', function(notEx){
                                                                            let notaExame = notEx

                                                                            if(notaExame == '' || isNaN(notaExame)){
                                                                                console.log('Digite a nota do exame do aluno com números')
                                                                                entradaDeDados.close()
                                                                            }else {
                                                                                let resExame = mediaExame.mediaExame(resultadoMedia,notaExame)

                                                                                if(resExame >= 60){
                                                                                    status = 'Aprovado'
                                                                                }else{
                                                                                    status = 'Reprovado'
                                                                                }

                                                                                ExibirLog = exibirCon.exibir(sexA,nomeAluno,status,nomeDisc,nomeCurso,sexP,nomeProf,nota1, nota2,nota3,nota4,resultadoMedia  )

                                                                                console.log(
                                                                                
                                                                                    'Media final exame: ' + resExame
                                                                                )
    

                                                                            }

                                                                           
                                                                            



                                                                           

                                                                        })


                                                                    }else {
                                                                        status = 'Reprovado'
                                                                      
                                                                        
                                                                        ExibirLog = exibirCon.exibir(sexA,nomeAluno,status,nomeDisc,nomeCurso,sexP,nomeProf,nota1, nota2,nota3,nota4,resultadoMedia  )



                                                                        
                                                                    }

                                                                   






                                                                }


                                                            })
                                                        })
                                                    })
                                                })










                                            }
                                        })
                                    }
                                })
                            }

                        })
                    }
                })
            }

        })

    }



})