
function getSecondLargest(nums) {
    
        function comparaNumeros(a,b) { 
        if (a === b) return 0;
        if (a < b) return -1;
        if (a > b) return 1;
 }
const numeros = [...new Set(nums)]
    numeros.sort(comparaNumeros);

const last= numeros.pop();
const secondlast= numeros.pop();
return secondlast
}
console.log()