const numeros = [1,2,3,4, 6] 

const somaDosNumeros = numeros.reduce((previ,curr)=> curr+previ)
console.log('soma dos numeros é', +somaDosNumeros)

const multDosNumeros = numeros.reduce((previ,curr)=>curr*previ)
console.log('mult dos numeros é', +multDosNumeros)

multiplos2 = numeros.reduce((previ, item) => { 
    if (item % 2 === 0)  {
        previ.push(item)
        return previ
    }
    return previ
    
} ,[])
console.log('multiplos de dois dos numeros é', multiplos2)
const newValue = {}
colecaoNumerosReducer = function (previ, curr, i) {
    //
    
    previ[i] = curr**4
    return previ
}





const colecaoNumeros = numeros.reduce(colecaoNumerosReducer, newValue)



/* {}  */

console.log('coleção dos numeros é', colecaoNumeros)
console.log('valor na posição 0: ', colecaoNumeros[0])



        
        
        







