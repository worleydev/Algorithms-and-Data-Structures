function absentVowel(x){
    var str = 'aeiou'
    for ( var i in str ){
      if( x.toLowerCase().indexOf(str[i]) == -1){
     
        return Number(i) 
      }
    }
    
  }