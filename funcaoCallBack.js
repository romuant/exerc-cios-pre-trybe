   function somaCallBack(a, b, fnCallback) {
       return fnCallback(a+b);

   }
   var multiplica = function(total) {
       return total  * 2;
   };
console.log(somaCallBack(10, 3, multiplica));
console.log(somaCallBack(5, 2, function(total) {
    return total + 20;
}));

    console.log(somaCallBack(23,11,function(total){
        return total /2;
    }));



