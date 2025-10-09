// Given an array of integers your solution should find the smallest integer.
//
//     For example:
//
//     Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
//
//     Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
//
//     Например:
//
// Учитывая [34, 15, 88, 2], ваше решение вернет значение 2
// Учитывая [34, -345, -1, 100], ваше решение вернет значение -345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

function findSmallestInt (arr) {
    arr.sort((a, b) => a - b)
    return arr
}
const x = findSmallestInt([345, -345, -1000, 100])
console.log(x)




