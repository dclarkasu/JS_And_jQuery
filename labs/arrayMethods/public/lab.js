/*
0 : 'startingArray' ...
*/

var startingArray = [
  1,2,3,4,NaN,6,7,8,9,NaN,NaN,12,13,14
];

/*
1 : Modify `ex1` ...

Use `splice` and `forEach` to remove all occurences of `NaN` from the `startingArray`,
replace each with the next number in the sequence (e.g: `[4,NaN]` would become
`[4,5]`).

Ensure that you do not modify the actual values of `startingArray`, return a new
array. (***HINT:*** You will need to create a new array with the values of the
one provided as an argument).

*/

var ex1 = function(arr) {
/******************* Your Solution *******************/

for (var i = 0; i < arr.length; i++) {
	if (isNaN(arr[i])) {
		var indexElement = (arr[i-1]) + 1;
		arr.splice(i, 1, indexElement);
	}
}

return arr;

/*****************************************************/
};

/*
2 : Modify `ex2` ...

Use `map`, return a new array, convert all of the `NaN` values to `0`.

*/

var ex2 = function(arr) {
/******************* Your Solution *******************/

var arrTwo = arr.map(function(element) {
if (isNaN(element)) {
	return element = 0;
}

});
return arrTwo;
/*****************************************************/
};

/*
3 : Modify `ex3` ...

Use `filter`, return a new array which is a subset of the `startingArray` and
does not contain any NaN values.
*/

var ex3 = function(arr) {
/******************* Your Solution *******************/

var arrThree = arr.filter(function(x, i, arr) {
	if (!isNaN(x)){
		return x;
	}
	// else {
	// 	arr.splice(i,1);
	// }
	});

return arrThree;
/*****************************************************/
};

/*
4 : Modify `ex4` ...

Use your solution to `ex3` to return a filtered array without NaN, then `reverse`
the order of the array, then use the `reduce` function to subtract all of the values.
*/

var ex4 = function(arr) {
/******************* Your Solution *******************/

	var arrAgain = ex3(arr).reverse();

	var single = arrAgain.reduce(function(a,v) {
		return a-v;
	});
	return single;
/*****************************************************/
};

/*
5 : Modify `ex5` ...

Use `sort` to order the `startingArray` such that the numbers are in ascending
order, and the NaN values are the last three elements of the array. (***HINT:***
 Use an 'or' operator). Be sure not to modify the original array.
*/
var ex5 = function(arr) {
/******************* Your Solution *******************/

var arrSort = arr.sort(function compare (a,b) {

if (a > b || isNaN(a)) {
	return 1
}
else {
	return -1;
}

});

console.log(arrSort);

return arrSort;

/*****************************************************/
};

/*
6 : Modify `ex6` ...

Use array methods to rotate the values of the array input. For example, if the
spaces parameter was 5, the array would be rotated 5 spaces:

```js
var a = [1,2,3,4,NaN,6,7,8,9,NaN,NaN,12,13,14];

ex6(a,5); // => [6,7,8,9,NaN,NaN,12,13,14,1,2,3,4,NaN];
```
*/

var ex6 = function(arr, spaces) {
/******************* Your Solution *******************/
  var newArray = [];

 for (var i = 0 ; i < spaces; i++) {
 	newArray.push(arr.shift());
}

	newArray.forEach(function(element){
		arr.push(element);
	})
	return arr;
/*****************************************************/
};
