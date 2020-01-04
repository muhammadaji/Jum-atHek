minesweeper = (block) => {
    // Split the string first
    block = block.split(" ")
    let mineCounted = 0

    for ( let i in block ) {
        // Since it zero should be no mine around
        if (block[i] === "0") {
            continue;
        } else if (block[i] === "1") {
            // if it on first block and next block not 1 there should be mine
            if (i === "0" && block[parseInt[i]+1] !== "1") {
                mineCounted += 1
            // if it on last block and previous block not 1 there should be mine
            } else if (parseInt(i) === (block.length-1) && block[parseInt(i)-1] !== "1") {
                mineCounted += 1
            // if next block is 2 or 1 there should be mine
            } else if (block[parseInt(i)+1] === "1" || block[parseInt(i)+1] === "2") {
                mineCounted += 1
            } 
            // if current block is 2 and next block is 2 or 1 there should be mine
        } else if (block[i] === "2" && (block[parseInt(i)+1] === "1" || block[parseInt(i)+1] === "2")) {
            mineCounted += 1
        }
    }

    return mineCounted
}

console.log(minesweeper("0 1 1 0 0 0 0")) // 1
console.log(minesweeper("1 0 0 0 0 0 1 2 1 0")) // 3
console.log(minesweeper("0 0 0 0 0 0 0 0 0 0")) // 0