const Valores = [3, 7, 10, 25]

// Nesse caso o map vai pegar os index da Array 'Valores' e vai multiplicar um por um por 3 retornando uma nova array com os valores multiplicados.
const resultadoMulti = Valores.map(x => x * 3)
// Essa array vai ter os valores [ 9, 21, 30, 75] 
console.log(resultadoMulti)



function multiplyByThree (chances) {
    return chances.map(item=>item*3)
}
console.log(multiplyByThree([2,3,4,]))