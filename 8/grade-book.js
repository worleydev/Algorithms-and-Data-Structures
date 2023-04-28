function getGrade (s1, s2, s3) {
    let avg = (s1 + s2 + s3) /3
    return avg <= 100 && avg >= 90 ? 'A' : avg < 90 && avg >= 80 ? 'B' : avg >= 70 && avg < 80 ? 'C' :
           avg < 70 && avg >= 60 ? 'D' : avg < 60 && avg >= 0 ? 'F' : ''
  }