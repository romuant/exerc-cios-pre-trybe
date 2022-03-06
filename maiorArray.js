//maior numero do array

function maiorNumeroArray(nums){
    let maiorNumeroAteAgora=nums[0]
    for (let i=1;i<nums.length;i++){
        if(nums[i]>maiorNumeroAteAgora){
            maiorNumeroAteAgora=nums[i]
        }
    }
    return maiorNumeroAteAgora
}

console.log(maiorNumeroArray([1,3,4,78,9,-400,8000000,90]))