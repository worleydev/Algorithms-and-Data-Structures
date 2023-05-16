function alphabetWar(fight) {
   const tallied = fight.split('').filter(el => el == 'w' || el == 'p' || el == 'b' || el == 's' || el == 'm' || el == 'q' || el == 'd' || el == 'z').map(el => el == 'w' ? 4 : el == 'p' ? 3 : el == 'b' ? 2 : el == 's' ? 1 : el == 'm' ? -4 : el == 'q' ? -3 : el == 'd' ? -2 : el == 'z' ? -1 : el).reduce((acc ,c) => acc + c, 0)

   return tallied < 0 ? 'Right side wins!' : tallied > 0 ? 'Left side wins!' : "Let's fight again!"
}

// CLEANEST APPROACH
function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}

console.log(alphabetWar('as;lkdjfoieyrlknncv'))