function sumOfDifferences(arr) {
    arr.sort((a,b) => b - a);
    let sum = 0;
    for (let i = 0; i < arr.length - 1; ++i) {
        sum += arr[i] - arr[i + 1];
    }
    return sum;
  }
  
  
  // function sumOfDifferences(arr) {
  //   //empty and one element
  //   if(arr.length <2){
  //   return 0
  // }
  // //sort to descending
  // const descend = arr.sort((a,b) => b - a)
  // //subtract diff
  // for(let i=0;i<arr.length -1;i++){
  //   let differences = []
  //   differences.unshift(arr[i] - arr[i+1])
  //   return differences.reduce((acc,c) => acc + c)
  //   }
  // }
  