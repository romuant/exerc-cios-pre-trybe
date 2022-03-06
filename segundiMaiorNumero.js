
function getSecondLargest(nums) {
    
    function comparaNumeros(a,b) { 
        if (a === b) return 0;
        if (a < b) return -1;
        if (a > b) return 1;
    }
    const numeros = [...new Set(nums)]
    numeros.sort(comparaNumeros);

    numeros.pop();
    const secondlast= numeros.pop();
    return secondlast
}
console.log(getSecondLargest([2,4,6,6,68,56,78,-500,-12]))

