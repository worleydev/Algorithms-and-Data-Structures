function points(games) {
    let pointArr = games.map(el => el[0] > el[2] ? 3 : el[0] == el[2] ? 1 : 0)
    return pointArr.reduce((acc,c) => acc + c, 0)
  }