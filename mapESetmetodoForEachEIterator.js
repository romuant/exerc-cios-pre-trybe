//coleção MAP e SET.   MAP  é uma coleção de par
let produtos =new Map([
    ["01", "Mouse"],
    ["02", "Teclado"],
    ["03", "Monitor"],
    ["04", "Gabinete"]
])

produtos.set("05","Memoria")//Aqui acrescentamos QQ elemento que queiramos
function info(chave,valor){
    console.log("chave: "+chave + " - valor: " + valor)//Aqui conseguimos concatenar a impressao de chave e valor
}
//produtos.forEach(info)//Aqui o grupo forEach vai passar os valores para o parametro(chave e valor)
let itk=produtos.keys()
let itv=produtos.values()
console.log(itk.next())//Aqui o Iterator vai imprimir o primeiro elemento do produto
console.log(itv.next().value)//Aqui o Iterator vai imprimir o primeiro ou próximo  elemento do produto
