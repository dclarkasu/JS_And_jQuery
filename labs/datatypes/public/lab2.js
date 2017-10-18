
console.log(undefined == null); // true
console.log(NaN == NaN); // false
console.log(new String('foo') == 'foo'); //true
console.log('' == false); // true
console.log([1, 2] == 1, 2); // false 2
console.log(1 == true); // true
console.log(NaN == false); // false
console.log(0 == ''); // true

console.log("Hi");

console.log(undefined === null); // false
console.log(NaN === NaN); // false
console.log(new String('foo') === 'foo'); // false
console.log('' === false); // false
console.log([1, 2] === 1, 2); // false 2
console.log(1 === true); // false
console.log(NaN === false); // false
console.log(0 === ''); // false

console.log("Hello");

console.log(isNaN(undefined));// true
console.log(isNaN(NaN)); //true
console.log(isNaN(null)); //false
console.log(isNaN(''));// false
console.log(isNaN(false));//false
console.log(isNaN(0));//false


// 1: Assess the equality of the following using the equality operator. Try to think what the result will be before printing the result with a console.log():
//
// undefined,null
// NaN, NaN
// new String('foo'), 'foo'
// '', false
// [1,2], '1,2'
// '1', true
// NaN, false
// 0, ''
// 2: Assess the strict equality of the same pairs from #1.
//
// 3: Use isNaN() to evaluate the JavaScript falsy values. What can and cannot be coerced into a number?
//
// undefined
// NaN
// null
// ''
// false
// 0
