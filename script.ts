const Entrada = require('readline-sync');

let n: number = parseInt(Entrada.question("digite um numero positivo: "))

if(n < 0){
    console.log('Não é positivo!!!!')
}

else{
    for(let i = 0; i <= n; i = i+2){
        console.log(i)
}
}
