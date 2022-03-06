//coleção MAP e SET.   MAP  é uma coleção de par
let produtos =new Map([
    ["01", "Mouse"],
    ["02", "Teclado"],
    ["03", "Monitor"],
    ["04", "Gabinete"]
])

produtos.set("05","Memoria")
console.log(produtos.has("02")? "produto encontrado" : "não está na lista")
// O métdo HAS procura um elemento ou produto nos array e retorna um boleano