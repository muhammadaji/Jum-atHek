let checked = (data) => {
  let allowed = {
    1: [2, 4, 5],
    2: [3, 1, 4, 5, 6],
    3: [2, 5, 6],
    4: [1, 2, 5, 8, 7],
    5: [1, 2, 3, 4, 6, 7, 8, 9 ],
    6: [2, 3, 5, 8, 9],
    7: [4, 5, 8],
    8: [7, 4, 5, 6, 9],
    9: [8, 5, 9]
  }

  // Maksimal 7 min 5
  if (data.length < 5 || data.length > 7 ) {
    return 'TIDAK';
  }

  let result = 'YA'
  // Check 
  for ( let i in data ){
    if ( parseInt(i, 10) === 0 ) {
      continue;
    } 
    let found = false
    for ( let j in allowed[data[i-1]] ){
      if (parseInt(data[i], 10) === parseInt(allowed[data[i-1]][j], 10)) {
        found = true
        break;
      } 
    }
    if (!found){
      return 'TIDAK'
    }
  }
  return result
}

console.log(checked('12321'));
console.log(checked('23654789'));
console.log(checked('512369'));
