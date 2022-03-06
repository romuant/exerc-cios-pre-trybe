let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // uso das flags para corrigir do jeito que se queira

let result = userCheck.test(username);
console .log(result)