// To solve this Kata, complete the function which will return the length of the hyptenuse for a right angled triangle with the other two sides having a length equal to the inputs. More details:
//
//     The returned value should be a number rounded to three decimal places
// An error (ArgumentException in C#) should be thrown if an invalid input is provided (inputs should both be numbers that are above zero)
// calculateHypotenuse(1,1); // returns 1.414
// calculateHypotenuse(3,4); // returns 5
// calculateHypotenuse(-2,1); // throws error
// calculateHypotenuse("one", "two"); // throws error



// for a triangle with sides of length a, b, and c, where c is the hypotenuse.
// The solution should verify that inputs are valid numbers (both above zero).

function calculateHypotenuse(a, b) {
    if (a > 0 && b > 0 && typeof a !== 'boolean' && typeof b !== 'boolean' ) {
        let c = a * a + b * b

        let sqrt = Math.sqrt(c)

        return Number(sqrt.toFixed(3))
    }
     throw Error
}

const b = calculateHypotenuse(true, 5)
console.log(b)