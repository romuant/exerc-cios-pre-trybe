function findLongestwordLength(str)  {
    let words = str.split(' ');
    let maxlength =0;
for(let i=0;i<words.length;i++)  {
    if(words[i].length>maxlength) {
        maxlength =  words[i].length
    }
}
return maxlength
}
console.log(findLongestwordLength([9,12,-3,5,6,7]))