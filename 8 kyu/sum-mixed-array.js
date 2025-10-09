// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.
// Если задан массив целых чисел в виде строк и чисел в числовой форме, верните сумму значений массива, как если бы все они были числами.
//
//     Верните свой ответ в виде числа.

// function sumMix(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         arr = arr.map(Number)
//         sum += arr[i]
//     } return sum
// }
// let x = sumMix([1,2,3,'4','5','7'])
// console.log(x)

function sumMix(x) {
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        x = x.map(Number)
        sum += x[i]
    } return sum
}
let y = sumMix([1,2,3,'4','5','7'])
console.log(y)

