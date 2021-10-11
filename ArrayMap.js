//MAp e Filter
let num=[1,4,9,23,16,25]
let raiz=num.map(Math.sqrt)   //sqrt=square. Para cada elemento de num. e vai operar a raiz quadrada e armazenar em uma nova posição de raiz
for(let i=0;i<5;i++)//dará origem a um novo vetor raiz
console.log('numero: ' +num[i]+'  -  raiz: '+raiz[i])