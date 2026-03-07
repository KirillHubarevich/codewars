// Average runtime: ?ms

// function addedChar(s1, s2) {
//
//
//
//
// }
//
// const b = addedChar('hello', 'bbbhello')
// console.log(b)

function addedChar(s1, s2) {
    const count = new Map();

    for (const s of s1) {
        count.set(s, (count.get(s) || 0) + 1);
    }

    for (const s of s2) {
        if (!count.get(s)) return s;
        count.set(s, count.get(s) - 1);
    }
}

const b = addedChar('hello', 'checlclo')
console.log(b)

