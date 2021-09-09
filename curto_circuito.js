let n=0
if (!n) {
    n=10
}


/*
/* Sabemos que 0 é considerado um valor
 falso quando
 transformado em boleano(true/false)
mas se colocarmos uma exclamação (!)
 na frente do n do if, será uma negação
  do valor em n inicial
  e o resultado sera 10.
  
  
  
  let n=0
   n=n||10
  console.log(n)

  /* Ou se colocarmos o valor 10 no lugar 
  de 0 depois do simbolo || , como o valor de n=0 é invalido 
  para boleano será executado a outra linha que é 10.
  A seguir, da mesma forma se a variavel de isValid for true sera execultado por cause do &&
Isto é o que é chamado de curto=circuito.

let isValid = true
if(isValid){
isValid && console.log("é valido")
}
/*

Da mesma forma, se colocarmos isValid
 recebe false nada será executado, mas 
 se colocarmos true, a linha de console. 
 log será mostrada no terminal.
 */

 let isValid = false
//if (isValid) {
 isValid &&console.log("é válido")
 isValid || console.log(" não é valido")
/*
Agora, como no exemplo acima se colocarmos
isValid vai receber false e o operador 
 ou (||) aí  sera executado a linha do
 console .log porque a primeira linha do 
 (||) será ignorada e executada a segunda
 r true como entrada seráexecutada apenas
  a primeira parte do ou seja nada. 
*/
