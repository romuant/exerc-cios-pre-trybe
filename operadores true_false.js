//Operadore logicos - true e false
/* para uma pessoa viajar para o exterior:
precisa ser maior de 18 anos ou acompanhado dos pais
Ter comprado bilhete
*/
let idade = 18;
let paisPresentes = false;
let comprouBilhete= true;
//Precedência de operação está presente abaixo porque o que esta entre parenteses() tem primazia, é execultado primeiro.
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`pode viajar: ${podeViajar}`)
