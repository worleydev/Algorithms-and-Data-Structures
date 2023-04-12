function uefaEuro2016(teams, scores){
    function winner(){
      if(scores[0]>scores[1]){
        return `${teams[0]} won!`
      }else if(scores[0]<scores[1]){
        return `${teams[1]} won!`
      }else{
        return 'teams played draw.'
      }
    }
    return `At match ${teams[0]} - ${teams[1]}, ${winner()}`
  }