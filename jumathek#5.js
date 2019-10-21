  const lockPicker = (keys) => {
    // Max 100 number
    if (keys.length > 100) {
      return false
    }
    let left = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let right = []

    let counter = 0 
    let turn = "left"

    for ( let i in keys.split("") ) {
      if (keys[i].length > 1) {
        return false
      }
      // set up for left set
      for (let x in left) {
        if ( left[0] !== parseInt(keys[i]) ) {
          let take = left[0]
          left.shift()
          left.push(take)
        }
      }

      // set up for right set
      right = [left[0]]
      for (let y = left.length - 1; y >= 0; y--) {
        if (left[y] === right[right.length - 1]) {
          break;
        } else {
          right.unshift(left[y])
        }
      }
      
      // find if turn right or left
      if (parseInt(i, 10) === keys.length - 1) {
        break;
      } else {
        let aggLeft = 0
        let aggRight = 0
        for (let x in left) {
          if (parseInt(keys[parseInt(i, 10)+1],10) === parseInt(left[x], 10)) {
            break;
          }
          aggLeft++
        }

        for (let y = right.length - 1; y >= 0; y--) {
          if (parseInt(keys[parseInt(i, 10)+1],10) === parseInt(right[y], 10)) {
            break;
          }
          aggRight++
        }

        let nextTurn = ""

        if ( aggRight < aggLeft) {
          nextTurn = "right"
        } else if (aggRight > aggLeft) {
          nextTurn = "left"
        } else if (aggLeft === 5 || aggRight === 5) {
          nextTurn = turn
        }

        // Check if next turn is different or not from before
        if (turn !== nextTurn) {
          counter++
        }
        turn = nextTurn
      }
    }
    return counter
  }

  console.log(lockPicker('4350'))
  console.log(lockPicker('12345'))
  console.log(lockPicker('2121'))
  console.log(lockPicker('981'))