let encrypt = (sentence) => {
  var encryptedSentence = ''
  let match = /^[a-zA-Z ]+$/
  // check sentence must alphabetic and max character of sentence is 1000
  if (match.test(sentence) === true && sentence.length <= 1000) {
    // remove space first
    let word = sentence.split(" ")
    // iterate word
    for ( let i in word ) {
      let encryptedWord = ''
      // word must more than 3 character or equal 3 character
      if (word[i].length >= 3) {
        // iterate character in word backward
        for (let j = word[i].length - 1; j >= 0; j--) {
          encryptedWord += word[i][j]
        }
        encryptedSentence += `${encryptedWord} `
      } else {
        return false
      }
    }
    return encryptedSentence
  } else {
    return false
  }
}

console.log(encrypt('italem irad irigayaj'));
console.log(encrypt('iadab itsap ulalreb'));
console.log(encrypt('nalub kusutret gnalali'));
