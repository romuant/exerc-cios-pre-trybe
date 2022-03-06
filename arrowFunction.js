//Arrow function função de seta grande =>
//(parametros) => expressão Arrow function serve para passar valores


    const soma=(...num)=>{//(...num)usar este parametros rest para somar uma quantidade maior de numeros
let r=0
for(n of num)
r+=n
return r
}
const par =num =>{
    if(num%2==0)
    return true
  else
 return false
}
console.log(soma(2,5,6666,789,44444443))
console.log(par(2)? "É par" : "não é par")