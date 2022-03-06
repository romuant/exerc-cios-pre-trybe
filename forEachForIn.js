var pessoas ={
    01: "Matheus",
    02: "João",
    03: "Pedro",
    04: "Maria",
    05: "Roberta"
};
//For  each
Object.keys(pessoas).forEach(function(item) {
    console.log(item +"- "+pessoas[item]);
});
//for in
for(var item in pessoas) {
    console.log(item + " - " + pessoas[pessoas])
    }