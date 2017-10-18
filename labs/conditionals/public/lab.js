/*
1: Write a for loop that takes the the value of `base`, and modifies a variable
(total) to base to the power of `pow` in the following function:
*/

var exponential = function(base, pow) {
  var total = base;
  /************* Your Code Here **************/
  if (pow === 0) {
    return 1;
  }
  for(var i = 1; i < pow; i++) {
    total *= base;
  }
  /*******************************************/
  return total;

};

/*
2: Modify the following function with a `while` loop to print the 'nth'
Fibonacci number, where the variable `n` is that numbers position. E.g. the 5th
Fibonacci number is `3`.
*/

var fibonacci = function(n) {
  var x = 0, y = 1;
  var z = 0;
  var count = 2;
  /************ Your Code Here *************/
  if (n <= 1) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  if (isNaN(n)) {
    return NaN;
  }
  while( count < n) {
    // y = x + y;
    // z = y;
    // x = z;
    // console.log(y);

    // count++;
    z = y;
    y = x + y;
    x = z;
    console.log(y);
    count++;
  }
  /*****************************************/
  return y;
};

/*
3: Complete the following 'reduce' function such that it will return the a value
equal to the all of the values of the provided array (`arr`) combined through
some operation (`op`), where `op` is a string like '+', '-', '*', or '/'.

E.g.

reduce('+', [1,2,3]); // => 6
*/

var reduce = function(op, arr) {
  var total = arr[0];
  /************ Your Code Here *************/

  /*****************************************/
  return total;
};

/*
4: Complete the following 'isLeapYear' function such that it will return true if
the `year` provided is a leap year and `false` if the value is not a leap year.
*/

var isLeapYear = function(year) {
  var leapYear;
  /************ Your Code Here *************/

  /*****************************************/
  return leapYear;
};
