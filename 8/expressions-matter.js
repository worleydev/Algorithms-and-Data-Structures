function expressionMatter(a, b, c) {
    let ans = []
    ans.push(
      a + b + c,
      a * b + c,
      a + b * c,
      a * b * c,
      (a + b) * c,
      (a * b) + c,
      a + (b * c),
      a * (b + c)
    )
    return Math.max(...ans)
  }