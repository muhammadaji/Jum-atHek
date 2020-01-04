minesweeper = (block) => {
    block = block.split(" ")
    let mineCounted = 0
    // console.log(block.length)
    for ( let i in block ) {
        // console.log(mineCounted)
        if (block[i] === "0") {
            continue;
        } else if (block[i] === "1") {
            if (i === "0" && block[parseInt[i]+1] !== "1") {
                mineCounted += 1
            } else if (parseInt(i) === (block.length-1) && block[parseInt(i)-1] !== "1") {
                mineCounted += 1
            } else if (block[parseInt(i)+1] === "1" || block[parseInt(i)+1] === "2") {
                mineCounted += 1
            } 
        } else if (block[i] === "2" && (block[parseInt(i)+1] === "1" || block[parseInt(i)+1] === "2")) {
            mineCounted += 1
        }
    }

    return mineCounted
}

console.log(minesweeper("0 1 1 0 0 0 0")) // 1
console.log(minesweeper("1 0 0 0 0 0 1 2 1 0")) // 1
console.log(minesweeper("0 0 0 0 0 0 0 0 0 0")) // 1