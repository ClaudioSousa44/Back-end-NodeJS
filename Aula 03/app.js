var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('1 - Somar'+ '\n' +
'2 - Subtrair' + '\n' +
'3 - Multiplicar' + '\n' +
'4 - Dividir');

entradaDeDados.question('Qual operação você deseja realizar? ', function(op){
    let operacao = op;

    if(isNaN(operacao) || operacao > 4 || operacao < 1 ){
        console.log('Por favor, digite um número de 1 a 4!');

    } else {
        entradaDeDados.question('Digite o primeiro número: ', function(num1){
            let numero1= parseFloat(num1.replace(",","."));
            entradaDeDados.question('Digite o segundo número: ', function(num2){
                let numero2 = parseFloat(num2.replace(",","."));

                if(isNaN(numero1) || isNaN (numero2)){
                    console.log('Erro: Digite apenas números!')
                } else if (numero1 === "" || numero2 === ""){
                    console.log('Erro: Número inválido')
                }else {
                    let resultado
                    let opr;
                    if(operacao == 1){
                        resultado = numero1 + numero2;
                         opr = 'Somar';

                    }else if ( operacao == 2 ){
                        resultado = numero1 - numero2;
                        opr = 'Subtrair';
                    
                    }else if (operacao == 3){
                        resultado = numero1 * numero2;
                        opr = 'Multiplicar';
                    }else{
                        if(numero1 == 0 || numero2 == 0){
                            
                            opr = 'Dividir';
                            resultado = "Não é possivel dividir com 0"
                        }else {
                            resultado = numero1 / numero2;
                            opr = 'Dividir';
                        }
                    }

                    console.log('Número 1: ' + numero1 + '\n' +
                                'Número 2: ' + numero2 + '\n' +
                                'Operação escolhida: ' + opr + '\n' +
                                'Resultado: ' + resultado);


                

                }
            })
        })
    }
   
                


})