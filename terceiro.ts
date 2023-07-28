import { clearScreenDown } from "readline";

const tab = require('readline-sync');

let number: number = parseFloat(tab.question('digite um numero: '))

for(let i = 0; i <= number * 10; i= i + number){
    console.log(i)
}