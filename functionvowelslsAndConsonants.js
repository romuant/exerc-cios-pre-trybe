// vowels= a,e,i,o,u    

const vowelsAndConsonants = (w) => {
    const vowels = ['a','e','i','o','u' ] 

    // for (var i = 0; i < 9; i++) {
    //     console.log(i);
    //     // more statements
    //  } referencia mdn
    // cada letra em uma linha , primeiro as vogais , depois as consoantes
    // transformar w em lista
    // 'ABC' -> ['A', 'B', 'C'] -> ['a','e','i', 'o', 'u'] -> 
    const  listaW = w.split('')
    // console.log(listaW, 'separei w em uma lista')
    for (let i = 0; i <= listaW.length - 1; i++ ) {
        const wAtual = listaW[i]
        // console.log(wAtual, 'peguei elemento atual da listaw')
        if (vowels.includes(wAtual)) {
            console.log(wAtual)
            continue
            
        } 
        // console.log('nao peguei essa letra')
    }

    for (let i = 0; i <= listaW.length - 1; i++ ) {
        const wAtual = listaW[i]
        // console.log(wAtual, 'peguei elemento atual da listaw')
        if (vowels.includes(wAtual)) {
            continue
            
        } 
        console.log(wAtual)
    }
}

/* outra resolução */

const ImprimeLetraOuVogais = (w) => {

    const  listaW = w.split('') /* ex: ['a', 'b', 'c'] */
    const vogais = ['a','e','i','o','u' ]
    const vogaisNaListaW = listaW.filter(el => vogais.includes(el))  
    const consoantesNaListaW = listaW.filter(el => !vogais.includes(el))
    console.log('--------------------------')
    vogaisNaListaW.map(el => console.log(el))
    consoantesNaListaW.map(el => console.log(el))


}

ImprimeLetraOuVogais('adebc')
i


