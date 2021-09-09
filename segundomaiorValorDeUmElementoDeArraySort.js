var lista =[1000000000,3,6,55555447,5];
 function acharSegundoMaior(nums) {
     // função de ordenamento de lista 
    function comparaNumeros(a,b) { if (a === b) return 0; if (a < b) return -1; if (a > b) return 1; }// declaração da função de ordenamento
    // remoção  de duplicatas
    const numeros = [...new Set(nums)]
    // ordenando o numero chamando a funçao de ordenação 
    numeros.sort(comparaNumeros);
    
    // imprimindo resultado de ordenação de lista sem duplicatas
    console.log(numeros)
    // remoção do ultimo elemento da lista 
    const last= numeros.pop();
    // imprimindo resultado da lista sem duplicatas com a exceção do ultimo elemento
    console.log(numeros)
    // armazenando o segundo maior numero em variavel second last
    const secondlast= numeros.pop();

    // retorno de função de pega segundo maior numero
    return secondlast
 }
 console.log(comparaNumeros(secondlast))

