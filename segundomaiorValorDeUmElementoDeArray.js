
     function getSecondLargest(nums) {
         //copia de array e remoção de duplicatas
        const numeros = [...new Set(nums)]
        // ordenamento
        numeros.sort((a, b) => {
            if (a > b) {
                return 1
            }
            if (a < b) {
                return -1
            }
        })

        
        
        console.log(numeros)
        return numeros;
    }
getSecondLargest([1,69,2,455,455,69])






    

