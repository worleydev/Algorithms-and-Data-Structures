function divCon(x){
    const num = []
    const str = []
    for(let i=0; i<x.length; i++){
      if(x[i] === String(x[i])){
        str.push(x[i])
      } else {
        num.push(x[i])
      }
    }
    return num.reduce((acc,c) => acc + c, 0) - str.map(Number).reduce((acc,c) => acc + c, 0)
  }


//   typeof syntax
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }