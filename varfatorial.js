
1
2
3
4
5
6
var fatorial = 4 ;
function calcFatorial(fatorial) {

    
    for(var i = fatorial; i >1; i--) { // Aqui um boleano deixa o processamento seguir se for true
        fatorial = (fatorial*(i-1)) 
    }
    var resultado = fatorial;
    return resultado

}
console.log(calcFatorial(3))