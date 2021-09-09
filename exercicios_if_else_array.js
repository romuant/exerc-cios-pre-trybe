
let idade = 19;
let paisPresentes = false;
let comprouBilhete= false;
//Precedência de operação está presente abaixo porque o que esta entre parenteses() tem primazia, é execultado primeiro.
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`pode viajar: ${podeViajar}`)
if(comprouBilhete ===true){
    return
}
