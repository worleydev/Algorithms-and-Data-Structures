function partlist(arr) {
    return arr.map((el,ind) => [arr.slice(0,ind).join(' '), arr.slice(ind).join(' ')]).slice(1)
}