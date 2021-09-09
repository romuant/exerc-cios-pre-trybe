function urna(votos) {
    // Escreva seu código aqui
    const votosEmA = votos.filter(el => el === 'A')
    const votosEmB = votos.filter(el => el === 'B')
    const votosEmC = votos.filter(el => el === 'C')
    
    if (votosEmA.length > votosEmB.length && votosEmA.length > votosEmC.length) return 'A'
    if (votosEmB.length > votosEmA.length && votosEmB.length > votosEmC.length) return 'B'
    return 'C'
}   