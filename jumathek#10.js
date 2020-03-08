const difference = (arraySet) => {
    // Remove strip and make them to two variable
    let setA = arraySet.split("-")[0]
    let setB = arraySet.split("-")[1]
    // Split the space
    setA = setA.split(" ")
    setB = setB.split(" ")
    let totalDifference = 0


    // Now lets search the biggest difference for each comparison
    for (let i in setA) {
        let diffComp = []
        // Search the difference of each comparison
        for (let j in setB) {
            setA[i] = parseInt(setA[i], 10)
            setB[j] = parseInt(setB[j], 10)
            if (setA[i] > setB[j]) {
                diffComp.push(setA[i] - setB[j])
            } else if (setA[i] < setB[j]) {
                diffComp.push(setB[j] - setA[i])
            } else {
                diffComp.push(setA[i] - setB[j])
            }
        }

        // Now search for the biggest difference from before
        let highest = 0
        let index = ""
        for (let x in diffComp) {
            if (x === "0") {
                highest = diffComp[x]
                index = x
            }
            if (diffComp[x] === highest || diffComp[x] > highest) {
                highest = diffComp[x]
                index = x
                continue
            }
        }
        // Since we can't use again number with the biggest difference, we remove it
        setB.splice(index, 1)
        // Add difference with previous difference
        totalDifference += highest
    }
    return totalDifference
}

console.log(difference("1 2 3 4-1 2 3 4"))
console.log(difference("10 20 30-0 0 0"))
console.log(difference("5 5 1-0 1 2"))