function maxDiff(list) {
    if( list.length <= 1) return 0
    return Math.max(...list) - Math.min(...list)
  };