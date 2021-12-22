 let isValid = ""

     isValid && console.log("é válido")
     isValid || console.log("não é válido")/* aqui
  ou (||) funciona igual else, se isValid
  for true será mostrada o && e se isValid= false,
   será mostrada a opção || (não é válido).
   */
//  function é divisivelPorDois(numero) {
//      return numero % 2 === 0
//  }

//  function divisivelPorDois(numero = 2) {
//      if (numero % 2 === 0) {
//          return true
//      }
//      return false
//  }

//  function DivisivelPorDois(numero) {
//      if (numero % 2 === 0) {
//          return true
//      } else {
//          return false
//      }

//  }

//  console.log(edivisivelPorDois(4))

function dividepordez(num){
    if (num % 10 ===0) {
return true
    } else{
        return false
    }
}
console.log(dividepordez(101))
