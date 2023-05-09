function capitalize(s){
  return [s.split('').map((el,idx) => idx % 2 === 0 ? el.toUpperCase() : el).join(''), 
      s.split('').map((el,idx) => idx % 2 === 0 ? el : el.toUpperCase()).join('')   ]
};