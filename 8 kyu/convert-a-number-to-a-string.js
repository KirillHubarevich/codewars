
//
// We need a function that can transform a number (integer) into a string.
//
//     What ways of achieving this do you know?


function numberToString(num) {
  if (typeof num === 'number') {
      return num.toString();
  }
  return num;
}
