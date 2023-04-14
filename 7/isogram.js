function isIsogram(str){
    const chars = [];
    for (let i = 0; i < str.length; i++) {
      const newChar = str[i].toLowerCase();
      if (chars.find(char => char === newChar)) {
        return false;
      }
      chars.push(newChar);
    }
    return true;
  }