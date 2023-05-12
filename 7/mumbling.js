function accum(s) {
	return s.split('').map((el,ind) => el.toUpperCase() + el.toLowerCase().repeat(ind)).join('-')
}