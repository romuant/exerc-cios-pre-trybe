/*Algoritmos JavaScript e estruturas de dados
JavaScript básico
Código de Golfe
No jogo de golfe , cada buraco tem um par, ou seja, strokesespera-se que o número médio que um jogador de golfe faça para enfiar a bola no buraco para completar a jogada. Dependendo de quão acima ou abaixo do parseu strokes, existe um apelido diferente.

Sua função pare strokesargumentos serão passados . Retorne a string correta de acordo com esta tabela que lista os golpes em ordem de prioridade; de cima (mais alto) para baixo (mais baixo):*/


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  
if(strokes ===1) return names[0]
if(strokes<= par-2) return names[1]
if(strokes === par-1) return names[2]
if(strokes === par) return names[3]
if(strokes === par+1) return names[4]
if(strokes === par+2) return names[5]
if(strokes >= par+3) return names[6]
 
}

golfScore(5, 4);