function getCount(str) {
    return str.split('').filter(n => n == 'a' || n == 'e' || n == 'i' || n == 'o' || n == 'u').length
  }