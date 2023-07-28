function warnTheSheep(queue) {
    const wolf = queue.indexOf('wolf')
    if (queue[queue.length - 1] === 'wolf') return 'Pls go away and stop eating my sheep'
    else return `Oi! Sheep number ${queue.length - wolf - 1}! You are about to be eaten by a wolf!`
  }