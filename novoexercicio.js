let paul= {idade:12, nome: 'paulo'}
let ton = {idade: 17, nome: 'tonim'}
let edu= {idade: 19, nome: 'edu'}


//  if (paul <18) {
//      console.log("é o menor e é de menor de idade")
//  } 
//  if (ton <18) {
//      console.log("ainda é de menor de idade")
//  } 
//  if (edu>=18) {
//      console.log("edu já é maior de idade")
//  }

/* 
verificar se alguem tem menor de 15 anos, sendo a resposta um boleano.
*/ 


 function filterIlegalAges(paulAge, tonAge, eduAge) {
     const ages = [paulAge, tonAge, eduAge]

     
   const ilegalAges = ages.filter((el) => el < 18)
   return ilegalAges
 }


 function filterLegalAges(paulAge, tonAge, eduAge) {
    const ages = [paulAge, tonAge, eduAge]
    //arrow function "const arrowFunction = () => () === const arrowFunction = () => {return undefined}" dessa forma pode ser executada apenas se tiver uma unica linha o retorno é subentendido
    //arrow function "const arrowFunction = () => {}" dessa forma pode ter mais linhas porem o retorno ,se houver, deve ser declarado
    const legalAges = ages.filter((el) => el >= 18)
    return legalAges
 }

 
const legalAges = filterLegalAges(paul, ton, edu)


const EmenorDeQuinze = (filhos) => {
  return filhos.filter((el) => el.idade <= 30)
}
/*  FILTER  > para encontrar uma lista de elementos que atenda a condição especificada na função callback
   FIND  >  para encontrar um elemento em um lista que atenda a condição especificada na função callbaCK. VAI RETORNAR APENAS O PRIMEIRO ELEMENTO*/> var nome = Romulo

const filhos = [ edu, paul, ton]

console.log(EmenorDeQuinze(filhos))





