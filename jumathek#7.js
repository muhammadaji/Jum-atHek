const tube = (ball) => {
    let tubeA = ball.split(" ")
    let tubeB = []
    let tubeS = []
    ball = ball.split(" ")
    count = 0

    //Loop the exists ball with number 
    for (let i in ball) {
      let left = 0
      //Since tube A not empty let's take the ball from the Tube A
      if (tubeA.length > 0) {
        let right = 0
        for (let i in tubeA) {
            right = tubeA[i]
            // Number on ball must bellow 1000
            if (parseInt(right, 10) > 1000) {
                return "Out of range"
            }
            // Let's compare number on ball on the both hand
            // The smaller ball go to the tube s
            if (parseInt(right, 10) > parseInt(left, 10)) {
                if (left !== 0) {
                    tubeS.unshift(left)
                    count++
                }
                left = right
            } else {
                tubeS.unshift(right)
            }
        }
        // The biggest ball should on left hand,
        // now the ball go to the tube b
        tubeB.unshift(left)
        tubeA = []
      } else {
        let right = 0
        for (let i in tubeS) {
            right = tubeS[i]
            // number on ball must bellow 1000
            if (parseInt(right, 10) > 1000) {
                return "Out of range"
            }
            // Let's compare number on ball on the both hand
            // the smaller ball go to the tube s
            if (parseInt(right, 10) > parseInt(left, 10)) {
                if (left !== 0) {
                    tubeA.unshift(left)
                    count++
                }
                left = right
            } else {
                tubeA.unshift(right)
            }
        }
        // The biggest ball should on left hand,
        // now the ball go to the tube b
        tubeB.unshift(left)
        tubeS = []
      }
    }
    console.log(tubeB)
    return count
}



console.log(tube('2 1'))
console.log(tube('5 4 1'))
console.log(tube('9 1'))
console.log(tube('2 4 8 12'))

