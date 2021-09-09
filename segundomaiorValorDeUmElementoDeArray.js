
     function getSecondLargest(nums) {
         //copia de array e remoção de duplicatas
        const numeros = [...new Set(nums)]
        // ordenamento
        numeros.sort((a, b) => {
            console.log(numeros)
            if (a > b) {console.log(a, b, numeros);  return -1}
            if (a < b) {console.log(a,b, numeros);return 1}
        })
        
        
        console.log(numeros[1])
        return numeros[1];
    }
getSecondLargest([1, 51])






    

