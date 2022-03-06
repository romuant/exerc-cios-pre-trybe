const os =require('os')//importar modulos
const {freemen, totalmen}  = os
const total = parseInt(totalmen()  /1024/1024)
const mem = parseInt(freemen() /1024 /1024)
const percents = parseInt(men/total)*100
console.log(men,total)