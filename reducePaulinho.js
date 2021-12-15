const numeros = [1,2,3,4, 6] 

const somaDosNumeros = numeros.reduce((previ,curr)=> curr+previ)
console.log('soma dos numeros é', somaDosNumeros)

const multDosNumeros = numeros.reduce((previ,curr)=>curr*previ)
console.log('mult dos numeros é', multDosNumeros)

multiplos2 = numeros.reduce((previ, item) => { 
    if (item % 2 === 0)  {
        previ.push(item)
        return previ
    }
    return previ
    
} ,[])
console.log('multiplos de dois dos numeros é', multiplos2)

const colecaoNumeros = numeros.reduce((previ, item, i) => {
   const operacaoComplicada = (parametro) => /* operação complicada */ parametro ** 4
   previ[i] = operacaoComplicada(item)
   return previ
}, {})
console.log('coleção dos numeros é', colecaoNumeros)
console.log(colecaoNumeros[0])

        
        
        







