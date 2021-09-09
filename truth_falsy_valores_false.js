//valores falsos: 0, "", NaN, undefined, null, false
//valores verdadeiros: todos os demais
if("false") {
    console.log("true")
  }  else {
        console.log("false")
    }
    /*todos os valores ditos falsos acima nao serao verdadeiros.
entao qualquer valor falso vai cair no bloco else e o operador
vai mostrar false, caso seja valor aceito será mostrada a resposta true
*/