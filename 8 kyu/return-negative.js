// Description:
//     In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// В этом простом задании вам дается число, и вы должны сделать его отрицательным. Но, может быть, это число уже отрицательное?
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


// function makeNegative(num) {
//     if // Code?
// }


// Есть число - например 1 и нужно сделать из него -1 (но если у меня число уже -1 как быть, число не должно быть равно нулю)


// function makeNegative(num = -42){
//     if (num > 0) {
//         num = -num
//         console.log('Число подходит, получается -', num)
//         return num
//     } else if (num === 0 && num < 0)
//         return num
//     console.log('Число равно нулю или уже отрицательное, это число -', num)
// }
// makeNegative()

function makeNegative(num) {
    if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}

