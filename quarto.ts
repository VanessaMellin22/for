
const seq = require("readline-sync");

let t = 1;
let p = 0;

for(let i = 0; i < 10; i++){

    let s = t + p;
    console.log(s);

    p = t
    t = s
}
