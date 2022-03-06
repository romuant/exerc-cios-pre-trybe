//TESTE DE MAIOR NUMERO DE ARRAY

const maiorNumeroArray=require('./index');
test('maiorNumeroArray',()=>{
    expect(maiorNumeroArray([1,2,3,4])).toBe(4)
    expect(maiorNumeroArray([4,3,2,1])).toBe(4)
    expect(maiorNumeroArray([6,9,1,3,8,-5,4,5])).toBe(9)
    expect(maiorNumeroArray([-5,-10,-3,-1,-4,])).toBe(-1)
    expect(maiorNumeroArray([4,10,20,1,0,3,5,2])).toBe(20)
    expect(maiorNumeroArray([10,3,45,1,-20])).toBe(45)
})