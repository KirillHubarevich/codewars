// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//     Ваша задача - создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.



 function descendingOrder(n) {
     return Number(String(n).split('').sort((a, b) => b - a).join(''));
 }
 const x = descendingOrder(41258)
console.log(x)




