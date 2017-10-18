/*
0 : Use the following array literal to test all of your functions.
*/

var testArray = [
  8,99,76,90,1009,6520,32,102,109,392,324,203,230,
  12,23,546,234,1231,5346,4235234,1230,989,34230,
  123,242,124356,13,2,3,1,5,68,545,34,62,56
 ];

/*
1 : Write a function named 'linearSearch' ...

The function will accept two arguments:

* the first argument is the number you are searching for.

* the second argument is the array you are searching in.

Your goal is to iterate over the provided array, return the index of the sought
number if it is present, or `-1` if it is not.
*/

/***************** Your Solution *****************/
var linearSearch = function(num, arr) {
var index = -1;
  arr.forEach(function(element, i) {
    if(element === num) {
      index = i;
    } // can't have an else statement making changes because if it finds the num on one
    // iteration it will "not find" it on the next and reset i to -1
  });
  return index;
}
/*************************************************/

/*
2 : Write a function named 'bubbleSort' ...

The function will accept one argument, an array.

In bubble sort, we start at the beginning of the array and swap the first two
elements if the first is greater than the second. Then, we go to the next pair,
and so on, continuously making sweeps of the array until it is sorted. In doing
so, the smaller items slowly 'bubble' up to the beginning of the list.
*/

/***************** Your Solution *****************/
var bubbleSort = function(arr) {
  var bigNum = 0;
  var smallNum = 0;
  var changesMade = false;

  do {
    arr.forEach(function(element, i, array) {//element = current index value. index = current
      // index #. array = entire array. These values get passed every time no matter what.
      // We give them names so that we can USE them to access the properties we want such as
      // multiple indexes
      changesMade = false;
      if(array[i] > array[i + 1]) {
        bigNum = array[i];
        smallNum = array[i+1];
        array[i+1] = bigNum;
        array[i] = smallNum;
        changesMade = true;
      }
    });
  } while (changesMade); //allows for each to keep going until no changes are made
  return arr;
}
/*************************************************/

/*
3 : Write a function named 'binarySearch' ...

The function will accept three arguments:

* the first argument is a value to search for.

* the second argument is an array to search in.

* the third argument is a sorting function which will sort an array.

In binary search, we look for an element (x) in a sorted array by first comparing
x to the value at the midpoint of the array (y). If x is less than y, we search
the left half of the array. If x is greater than y, we search the right half. We
repeat this process, searching subsets of the original array until x is found,
or we run out of places to look.

If x is found, return the index at which it is located, otherwise, return -1.

*/

/***************** Your Solution *****************/
var binarySearch = function(searchVal, arr, func) {
  var mid = (arr.length/2) - 1;
  var found = 0;

  // array.forEach(function(element, i, arr) {
  var newArr = func(arr);
    if (searchVal < newArr[mid]) {
      for (var i = 0; i < mid; i++) {
        if (searchVal === newArr[i]) {
          found = i;
        }
        else {
          found = -1;
        }
      }
    }
    else if (searchVal > newArr[mid]) {
        for (var i = mid; i < newArr.length-1; i++) {
          if (searchVal === newArr[i]) {
            found = i;
          }
          else {
            found = -1;
          }
        }
    }
    else if (searchVal === newArr[mid]) {
      found = mid;
    }
  // });
  return found;
}
/*************************************************/

/*
4 : Write a function named 'slice' ...

***NOTE:*** Do not use JavaScript's *Array.slice()* method.

The function should accept two arguments:

* the first argument is the index of at which to begin

* the second argument is the array to modify

'slice' should return an array comprised of the values of the array provided as
an argument from the provided index to the end of the original array.

##### Example :
var arr = [0,1,2,3,4,5,6,7,8,9,10];
```js
slice(5, arr); // => [5,6,7,8,9,10];
```
*/

/***************** Your Solution *****************/

/*************************************************/

/*
5 : Write a function named 'includes' ...

***NOTE:*** Do not use JavaScript's *Array.includes()* method.

The function should accept two arguments:

* the first argument should be a value to look for

* the second argument should be an array to look in

If the value is inside of the array, return true, otherwise, return false.
*/

/***************** Your Solution *****************/

/*************************************************/

/*
6 : Write a function named 'filter' ...

***NOTE:*** Do not use JavaScript's *Array.filter()* method.

The function should accept two arguments:

* the first argument is a value to check exists

* the second argument is an array

Your 'filter' should return a new array containing a subset of the values in the
array provided as an argument, such that they contain the value provided as the
first argument.

##### Example :

```js
var arr = [1,11,44,23,65,123];

filter(1,arr); // => [1,11,123];
```

*/

/***************** Your Solution *****************/

/*************************************************/