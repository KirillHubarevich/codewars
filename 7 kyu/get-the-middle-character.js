// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
//     If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

// function getMiddle(s) {
//     //Code goes here!
//     return '';
// }


function getMiddle(s) {
    const neededSymbol = Math.floor(s.length / 2)
    if (s.length % 2 === 0) {
        return (s).split('').slice(neededSymbol - 1, neededSymbol + 1).join('')
    }
    if (s.length % 2 === 1) {
        return (s).split('').slice(neededSymbol, neededSymbol + 1).join('')
    }
}

const x = getMiddle(  'middle')
console.log(x)


