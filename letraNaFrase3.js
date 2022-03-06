function comFilter(frase, letraProcurada) {
    return [...frase].filter(letra => letra === letraProcurada).length;
}
function comForEach(frase, letraProcurada) {
    var total = 0;
    [...frase].forEach(letra => {
        if (letra === letraProcurada)
            total++;
            
    });
    return total;
}
function comSplit(frase, letraProcurada) {
    return frase.split(letraProcurada).length - 1;
}
function comRegex(frase, letraProcurada) {
    var re = new RegExp(letraProcurada, "g");
    return [...frase.matchAll(re)].length;
}
function comFor(frase, letraProcurada) {
    var quantidade = 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase[i] === letraProcurada) {
            quantidade++
        }
    }
    return quantidade;
}
function testar(frase, letraProcurada) {
    console.log(`procurando "${letraProcurada}" em "${frase}"`);
    for (const func of [comFilter, comForEach, comSplit, comRegex, comFor]) {
        console.log(`- ${func.name} = ${func(frase, letraProcurada)}`);
    }
}

testar('até é noé', 'é');
testar('até é noé', 'é');