function adjacentElementsProduct(array) {
    const products = []
    for(let i=0; i<array.length; i++){
      if(i < array.length - 1){
        products.push(array[i] * array[i + 1])
      } 
    }
    return Math.max(...products)
  }