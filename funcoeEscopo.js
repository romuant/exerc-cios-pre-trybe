let n ="local"
function mostraN(){
    let n1="local"

    if(true){
        let n2 ="n2 dentro de if com var"

    }
    console.log(n2)
    console.log("valor de n1: "+n1)
    console.log("valor de n2: " +n2)
}
mostraN()
console.log("valor de n no escopo global: " +n)
    
console.log(n2)
/*o escopo da variavel criada com let é um escopo de bloco
     se for com a palavra var sera para o escopo da função.
     var gera um escopo de função, enquanto let e const gera
      um escopo de bloco*/
const ns1=[1,2,3]
const ns3=[]
const filtraTres = function (el,i, list) {
  return el !== 3
}

const ns2 = ns1.filter(filtraTres)

ns1.forEach((el) => {if (el !== 3) ns3.push(el)})

const ns4 = {
    nome: 'romulo',
    idade: 57
}

let texto = 'abc'



