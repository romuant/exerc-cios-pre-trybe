/* 5 pessoas levam 12 hs para fazer uma lage de 50m². quantas pessoa para fazer uma lage de 125m² no mesmo período.
*/
/* p = 5, medida1= 50 -> 5 ->  
  medida2 = 125, p1=?,   ->   ->125 /12p = 50/60
*/
let medida=523000223
  function numeroDePessoas(m) {
      return   parseInt (m / 10)
  }
  const pessoas = numeroDePessoas(medida)
  console.log(" O número de pessoas para fazer uma lage de "+medida+" em 12 horas, será:",pessoas, "pessoas")

  