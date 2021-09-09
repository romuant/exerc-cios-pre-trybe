 const arr =new Array()
 
 const arr2 = new Array(true, "Daniel", 28, new Array(2,4,10))
 arr[0]="Daniel"
 arr[1]=40


 /* sintaxe literal*/

 const arr3 = ["Daniel", 40, [3,6,9], true]

console.log(arr3[2][0])/*para mostrar um valor especifico
 na array 3 por exemplo, 
coloquei aqui o indice 0 que é o numero 3*/
arr3[4] ="novo valor 1"/*para acrescenta um novo ítem a array*/
arr3[arr3.length] = "novo valor 2"/*ou assim tambem se acrescenta um novo valor*/
arr3.push("push")/*adicionado com push()*/
arr3.push("a","b","c")/*adicionado com push()*/
console.log(arr3[6])/* aqui busca-se o sexto elemento da array(push)*/
console.log(arr3[2][0])
console.log(arr3)
let n=6   /*aqui podemos usar uma variavel para acessar um elemento de array(push)*/
console.log(arr3[n])/*aqui podemos usar uma variavel para acessar um elemento de array(push)*/