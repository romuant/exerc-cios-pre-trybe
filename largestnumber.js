//maior numero no array
function maiorNumeroNoArray(nums)  {
    let maiorNumeroAteAgora = nums[0]
    for (let i=1;i<nums.length;i++) {
        if(nums[i]>maiorNumeroAteAgora) {
            maiorNumeroAteAgora =nums[i]
        }
    }
    return maiorNumeroAteAgora
}
       

console.log(maiorNumeroNoArray([770,70,70,2,0,-1234,9,5,7,4,4]))