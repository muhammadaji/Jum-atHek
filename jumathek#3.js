let findLostOne = (number) => {
  // First find how digit number 
  let x = ''
  for (let i in number) {
    if (number[0] === "1" && number[1] === 11) {
      x = number[0] + number[1]
      break;
    } 
    if ( x.length > 2 ){
      break;
    }
    if (parseInt(x) + 1 === parseInt(number[i]) || parseInt(x) === parseInt(number[i + 1]) ) {
      if (parseInt(number[0]) !== 1 && parseInt(number[1]) !== 2 && parseInt(number[2]) !== 3) {
        x += number[i]
      }
      break;
    }
    x += number[i]
  }
  // separate number per-digit
  let separatedNumber = number.match(new RegExp('.{1,' + x.length + '}', 'g'))
  // Now find the lost one
  for (let i in separatedNumber) {
    if (parseInt(separatedNumber[i]) + 1 !== parseInt(separatedNumber[parseInt(i)+1])) {
      return parseInt(separatedNumber[i])+1 
    }
  }
}

console.log(findLostOne('23242526272830'))
console.log(findLostOne('101102103104105106107108109111112113'))
console.log(findLostOne('12346789'))