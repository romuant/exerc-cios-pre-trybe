  function fnExt(){
      let n = "n local na função externa"
  function fnInt(){
      let n ="n local da função interna"
      console.log(n)
    }
    fnInt()
    console.log(n)
    }
    fnExt()
