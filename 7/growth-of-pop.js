//P: p0 is initial population; percent: percent increase in pop yearly; aug: 
//   number of pop coming/leaving yearly; p: goal population
//R: When population exceeds p, return an integer of years it took to get there
//E: 
//P: create equation caclulating yearly population
//   loop this equation until yearlypop >= p
function nbYear(p0, percent, aug, p) {
    let count = 0
    while(p0 < p){
      count++
      p0 += Math.floor(p0 * (percent/100) + aug)
    } return count
}