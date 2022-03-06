 function  somaCallBack(a, b, fnCallBack) {
                             
     return fnCallBack(a+b);
 };
 const multiplica = function(total){
     return total *5;

 };

 const somaVinte = function(total){
    return total +20;
}

const  dividePorDois = function(total){
    return total /2;
}

console.log(somaCallBack(5,9, multiplica));
console.log(somaCallBack(5,2,somaVinte));
console.log(somaCallBack(23,11,dividePorDois));

