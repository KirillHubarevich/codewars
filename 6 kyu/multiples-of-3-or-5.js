// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If a number is a multiple of both 3 and 5, only count it once.

// Если мы перечислим все натуральные числа ниже 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих кратных чисел равна 23.
//
// Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5, которые находятся ниже переданного числа.
//
//     Кроме того, если число отрицательное, верните 0.
//
// Примечание: Если число кратно как 3, так и 5, подсчитайте его только один раз.
//
//     Любезно предоставлено projecteuler.net (Задача 1)


function solution(number) {
    let sum = 0
    let arr = []
    for (let i = number - 1; i >= 0; i--) {
        arr.push(i)
    }
    const a = arr.filter(num => num % 3 === 0 || num % 5 === 0)
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    return sum
}

const n = solution(10)

console.log(n)