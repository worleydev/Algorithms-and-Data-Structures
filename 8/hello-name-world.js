function hello(name) {
    const ln = name => name[0].toUpperCase() + name.slice(1).toLowerCase()
    if (name === '' || name === undefined) return 'Hello, World!'
    else return `Hello, ${ln(name)}!`
  }