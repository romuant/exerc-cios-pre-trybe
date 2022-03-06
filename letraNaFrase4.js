//quantas letras existe na frase
function letraNaFrase(frase,letra)  {
    return frase.split(letra).length-1
}
console.log(letraNaFrase("noé","é"))