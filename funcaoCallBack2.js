 function  somaCallBack(a, b, fnCallBack) {
                             
     return fnCallBack(a+b);
 };
 const multiplica = function(total){
     return total *5;

 };
console.log(somaCallBack(5,9, multiplica));
console.log(somaCallBack(5,2, function(total){
    return total +20;
}));
console.log(somaCallBack(23,11,function(total){
    return total /2;
}));