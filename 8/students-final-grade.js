function finalGrade (exam, projects) {
    let score
    
    if(exam > 90 || projects > 10){
      score = 100
    } else if(exam > 75 && projects >= 5){
      score = 90
    } else if(exam > 50 && projects >= 2){
      score = 75
    } else {
      score = 0
    }
    return score
  }