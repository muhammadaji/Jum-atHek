const watch = (button) => {
  if (button.length > 1000) {
    return false
  }
  button = button.split("")
  let counter = 60 
  
  for ( let i in button ) {
    if (button[i].length > 1) {
      return false
    }
    if (button[i] === "a" && button[parseInt(i, 10) - 1] === "a") {
        if (counter === 60) {
          counter = 1
        } else {
          counter++
        }
      } else if (button[i] === "i" && button[parseInt(i, 10) - 1] === "i") {
        if (counter === 60) {
          counter = 59
        } else if (counter === 1) {
          counter = 60
        } else {
          counter--
        }
      }
    }

    return counter
}

console.log(watch('aiaiaiaiaiaiaiai'))
console.log(watch('aaaaaaaaaaaaaaaaaaaaaa'))
console.log(watch('aaiiaa'))
console.log(watch('aaaiaiaiiiiaaai'))
console.log(watch('aaiii'))


