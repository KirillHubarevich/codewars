// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//
//     function evenOrOdd(number) {
//
// }


// function evenOrOdd(number) {
//     if (number % 2 === 0 || -number % 2 === 0) {
//         return 'Even'
//     }
//     if (number % 2 === 1 || -number % 2 === 1) {
//         return 'Odd'
//     }
// }
//
// console.log(evenOrOdd(-419));


function evenOrOdd(number) {
    const num = number%2 === 0 ? 'Even' : 'Odd';
    return num
}

console.log(evenOrOdd(-50));