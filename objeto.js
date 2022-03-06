//const nomes = ["Daniel", "Maria", "joao"]
 //const idades =  [40, 28, 35]
// console.log(nomes[0],idades[0])// pedindo a primeira posição, indice 0, então estou pedindo dado da primeira posição
/*
const pessoa = new Object
pessoa.nome = "Daniel"
pessoa.idade = 40
console.log(pessoa)
let prop = "nome" 
console.log(pessoa[prop])//onde está nome, pode-se usar prop se nao soubero o nome
console.log(pessoa."idade")//deve-se usar aspas em idade para que seja uma string

outro exemplo
*/


//  SINTAXE LITERAL
const pessoa= {
    nome:"Daniel", //A literal substitui todas as linha de
    idade: 40      // baixo e dá o mesmo resultado.
    
}
pessoa.nome = "Daniel"
pessoa.idade = 40
console.log(pessoa)
let prop = "nome" 
console.log(pessoa[prop])//onde está nome, pode-se usar prop se nao soubero o nome
console.log(pessoa["idade"])//deve-se usar aspas em idade para que seja uma string