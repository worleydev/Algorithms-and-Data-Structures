function findDeletedNumber(arr, mixArr) {
  return Number(arr.filter(el => mixArr.includes(el) === false).join(''))
}