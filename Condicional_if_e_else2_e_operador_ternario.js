let n1=6
let n2=8
let media= (n1 + n2)/2
console.log(`média: ${media}`);
if(n1===0  || n2===0){
    console.log("reprovado")
} else if (media <7) {
    console.log("Reprovado, mas ha como recuperar")
} else{
    console.log("aprovado")
}
console.log("saiu do bloco if, continua o código")