//$FUNÇOES EM JS fatorial
//fatorial de 5
//FUNÇÃO COM RESURSIVIDADE
function fatorial(n){
    if(n==1){
        return 1     // CHAMA-SE FUNÇÃO REcURSIVA PORQUE USA-SE O RECURSO DE CHAMAR 
    } else {
        return n* fatorial(n-1) //A PROPRIA FUNÇÃO PAR RESOLVER ela mesma( n menos 1)
    }
}
console.log(fatorial(16))


