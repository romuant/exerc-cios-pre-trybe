
let idade = 17;
let paisPresentes = false;
let comprouBilhete= true;
//Precedência de operação está presente abaixo porque o que esta entre parenteses() tem primazia, é execultado primeiro.
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
    console.log(`pode viajar: ${podeViajar}`);
//let msgMaoirIdade = ""
//if(idade >=18) {
 //   msgMaoirIdade ="É maior de 18 anos"
//}else {
 //   msgMaioridade = "É menor de 18 anos"
 // Veja abaixo o operador ternario (?)retornando a string entre aspas e senao(:)retornará a string proxima, substituido varias linhas do codigo.
 let msgMaoirIdade = (idade >=18)    ? "É maior de idade" : "É menor de 18 anos";
 if(!comprouBilhete) {
     console.log("Não. Não comprou o bilhete")
} else {
    if(idade >= 18) {
    console.log("È maior de idade, pode viajar")
} else { console.log("OPa!!! É menor de idade")
    }
}

