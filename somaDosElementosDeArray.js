
function ArraySoma(numero)  {
     var soma=0
    for(i=0; i<numero.length;i++)  {
     soma=soma + numero[i]
    }
    return soma
}
console.log(ArraySoma([300000,13,4,599900,778,999666660000000000]))