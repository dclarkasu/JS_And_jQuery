var testArr = ['kiwi', 'agave', 'plum', 'grapefruit', 'GIANT WATERMELON', 'Jack fruit'];

// push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array

console.log(testArr);
testArr.push('star fruit');
console.log("testArr.push('star fruit') : " + testArr + " *** New Array length: " + testArr.length);
resetArray();

//pop()
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// console.log(testArr);
console.log("testArr.pop() : " + " deleted: " + testArr.pop() + " New Array: " + testArr);

resetArray();

//splice()
// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

// console.log(testArr);
testArr.splice(3, 1);
console.log(testArr);

resetArray();
testArr.splice(2, 3); //removes a count of 3(counted like normal people) starting at index 2
console.log("testArr.splice(2, 3) : " + testArr);

resetArray();
testArr.splice(1,2, "cow patty");
console.log(testArr);

testArr = ['kiwi', 'agave', 'plum', 'grapefruit', 'GIANT WATERMELON', 'Jack fruit', 'banana', 'banana', 'plum'];


//indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// console.log(testArr);
console.log("testArr.indexOf('star fruit') : " + testArr.indexOf('star fruit'));
console.log("testArr.indexOf('grapefruit') : " + testArr.indexOf('grapefruit'));
console.log("testArr.indexOf('banana') : " + testArr.indexOf('banana'));
console.log("testArr.indexOf('plum', 4) : " + testArr.indexOf('plum', 4));

resetArray();

//lastIndexOf()
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// console.log(testArr);
console.log("testArr.lastIndexOf('star fruit') : " + testArr.lastIndexOf('star fruit'));

resetArray();

function resetArray() {
  testArr = ['kiwi', 'agave', 'plum', 'grapefruit', 'GIANT WATERMELON', 'Jack fruit'];
}
