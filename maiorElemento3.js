const valores =[12,34,5,6,6,45,45,67890,56565,90,90,-4590852,981928452092,86-10]
const numerosSemRepeticao = [...new Set(valores)];
numerosSemRepeticao.sort((a, b) => a - b)
console.log(numerosSemRepeticao)
