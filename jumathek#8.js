const vim = (command, text) => {
    if (command.length > 100 || command.length < 1) {
        return 'out of range'
    }
    let words = text.split(" ")
    if ( words < 1 ) {
        return 'must insert one word'
    } else if ( words > 100 ) {
        return 'out of range'
    }

    let currentPosition = 1
    for ( let i in command ) {
        switch (command[i]) {
            case 'l':
                if (currentPosition < text.length) {
                    currentPosition++
                }
                break;
            case 'h':
                if (currentPosition > 1) {
                    currentPosition--
                }
                break;
            case 'w':
                let position = 0
                for (let i in words) {
                    position += words[i].length + 1
                    if ((parseInt(i) !== parseInt(words.length-1)) && position > currentPosition) {
                        currentPosition = position + 1
                        break;
                    }
                }
                break;
            case 'b': 
                if (currentPosition > 1 ) {
                    let position = 0 
                    for ( let i in words ) {
                        position += words[i].length + 1
                        if (currentPosition < position) {
                            if (position - words[i].length < currentPosition) {
                                currentPosition = position - words[i].length
                            } else {
                                currentPosition = position - words[i].length - words[i-1].length - 1
                            }
                            break;
                        } 
                    }
                }
                break;
            default:
                return 'Unidentified command';
        }
    }

    console.log(text[currentPosition-1])
    return(currentPosition)
};

console.log(vim('ll', 'aku mau hidup seribu tahun lagi')) // 3
console.log(vim('b', 'robohnya surau kami')) // 1
console.log(vim('wh', 'kaki yang terhormat')) // 5