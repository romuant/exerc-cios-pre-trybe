function getArea(l, w) {
    const area = l * w
    return console.log(area)

}

getArea(4,5)


function getTriangleArea(base,altura) {
    const area = (base * altura) / 2
    return area
}

console.log(getTriangleArea(10,20))


function circuloArea(raio) {
    const area = Math.PI * (raio**2)
    return area
}
console.log(circuloArea(2))

function circuloPerimetro(diametro) {
    const perimetro = Math.PI * diametro
    return perimetro
}


console.log(circuloPerimetro(10))

function calcDespesas(comb, alim, outros) {
    const despesas = comb + alim + outros
    return despesas
}

console.log(calcDespesas(1000, 1000, 1000))

function calcPernasAranhas(pernas1, pernas2) {
    const pernas = pernas1 + pernas2
    return pernas
}
console.log(calcPernasAranhas(4+4,4+4))


