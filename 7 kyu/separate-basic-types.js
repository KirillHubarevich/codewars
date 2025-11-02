// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.
//
//     keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

function separateTypes(input) {
    const arrays = {
        number: [],
        string: [],
        boolean: []
    }
    for (let i = 0; i < input.length; i++) {
        const item = input[i];
        if (typeof item === 'number') {
            arrays.number.push(item);
        } else if (typeof item === 'string') {
            arrays.string.push(item);
        } else if (typeof item === 'boolean') {
            arrays.boolean.push(item);
        }
    }
    for (const key in arrays) {
        if (arrays[key].length === 0) {
            delete arrays[key];
        }
    }
    return arrays;
}
const x = separateTypes([false, false, 1, 1, 'fff'])
console.log(x)









// if ? then : else