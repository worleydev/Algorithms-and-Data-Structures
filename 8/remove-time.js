function shortenToDate(longDate) {
    return longDate.split('').slice(0, longDate.indexOf(',')).join('') 
  }