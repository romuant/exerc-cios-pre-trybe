//coleção MAP e SET.   MAP  é uma coleção de par
let produtos =new Map([
    ["01", ["Mouse","R$10,75"]],//aqui acrescentamos um valor, transformando tudo em array
    ["02", "Teclado"],
    ["03", "Monitor"],
    ["04", "Gabinete"]
])

//produtos.set("01", "Mouse")//pode-se usar todas esta linhas em uma so linha usando apenas .set
//produtos.set("2", "Teclado")
//produtos.set("03", "Monitor")
//produtos.set("04", "Gabinete")
//console.log("Tamanho: "+ produtos.size)    //Aqui usamos o size para saber o tamanho do map
//produtos.delete("03")//aqui pode-se deletar apenas um elemento do array
//produtos.clear()//com o metodo clear() vai ser apagado todos elementosdo map
//console.log(produtos.get("01",))//poderemos usar apenas um par
//console.log(produtos.get("02"))  //Aqui usamos o set para obter um elemento do map
//console.log(produtos.get("03"))  //Aqui usamos o set para obter um elemento do map
//console.log(produtos.get("04"))  //Aqui usamos o set para obter um elemento do map

for(p of produtos)// Aqui usamos este tipo de bloco for para lista todos os elementos do array
console.log(p[1])//se usar p[0] ele vai retornar as chave e se usar p[1]vai retornar os elementos do array
