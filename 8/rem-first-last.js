function array(arr){
    let sliceNDice = arr.split(',').slice(1,-1).join(' ')
    return sliceNDice == '' ? null : sliceNDice
  }