//
// Given three arrays of integers, return the sum of elements that are common in all three arrays.
//
//     For example:
//
//     common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
// More examples in the test cases.
//
//     Good luck!



function common(a, b, c) {
    const countB = {}, countC = {};

    for (const x of b) countB[x] = (countB[x] || 0) + 1;
    for (const x of c) countC[x] = (countC[x] || 0) + 1;

    let sum = 0;
    for (const x of a) {
        if (countB[x] > 0 && countC[x] > 0) {
            sum += x;
            countB[x]--;
            countC[x]--;
        }
    }

    return sum;
}

const u = common([2,2,2], [2,2], [2,2,2])
console.log(u)



// function common(a, b, c) {
//     let sum = 0;
//     const bCopy = [...b];
//     const cCopy = [...c];
//
//     for (let x of a) {
//         const bIndex = bCopy.indexOf(x);
//         const cIndex = cCopy.indexOf(x);
//         if (bIndex !== -1 && cIndex !== -1) {
//             sum += x;
//             bCopy.splice(bIndex, 1);
//             cCopy.splice(cIndex, 1);
//         }
//     }
//     return sum;
// }

// function common(a, b, c) {
//     return a.filter(a => b.includes(a) && c.includes(a)).reduce((a, b) => a + b, 0);
//
// }
//
// const u = common([2,2,2], [2,2], [2,2,2])
// console.log(u)




