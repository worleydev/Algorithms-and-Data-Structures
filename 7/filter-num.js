var filterString = function(value) {
    return Number(value.split('').filter(el => el >= 0).join(''))
  }