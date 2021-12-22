//maior numero do array
const 
function maiorNumeroArray(nums){
    let maiorNumeroAteAgora=nums[0]
    for (let i=1;i<nums.length;i++){
        if(nums[i]>maiorNumeroAteAgora){
            maiorNumeroAteAgora=nums[i]
        }
    }
    return maiorNumeroAteAgora
}
module.export = maiorNumeroArray
