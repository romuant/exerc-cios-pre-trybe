let nomes = ['Alice', 'Bob', 'Tiff','Tiff' , 'Bruce', 'Alice','Alice'];

let quantidadeNomes = nomes.reduce(function (todosNomes, nome) {
  if (nome in todosNomes) {
    todosNomes[nome]++;
  }
  else {
    todosNomes[nome] = 1;
  }
  return todosNomes;
}, {});
console.log(quantidadeNomes)
// quantidade de nomes:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }