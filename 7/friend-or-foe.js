function friend(friends){
    //P list of strings
    //R strings with 4 characters
    //E 'bob' 'bobb' => 'bobb'
    //P filter through list, only keep strings with length = 4
    return friends.filter(el => el.length === 4)
  }