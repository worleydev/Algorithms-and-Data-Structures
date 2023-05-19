function isRubyComing(list) {
    const result = list.map(el => el.language.includes('Ruby'))
    return result.includes(true)
  }


//   Best Practice:
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
  }