//a função deve retornar duas letras separadas  e reversas
function lastLetters(word)  {
const ultimaLetra = word[word.length-1]
var penultimaLetra = word[word.length-2]
var  resultado = ultimaLetra +" "+ penultimaLetra;
return resultado
}
console.log(lastLetters("apple"))