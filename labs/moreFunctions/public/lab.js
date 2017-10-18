/*
1 : Write a function named 'reverse' ...

This function will take one argument, a string.

Return the submitted string with the characters in reverse order.

***NOTE*** Do not use the 'reverse' method on the String object, write your own.
*/

/************** Your Solution Here ****************/
function reverse(string){ //our way
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    arr.unshift(string.charAt(i)); //unshift takes whatever i is and brings it to the front
  }
  return arr.join(''); // joins the array indeces into a single String (whatever is in ())
}

function reverse2(str) { //Kris way
  var reversed = "";
  for (var i = str.length - 1 ; i >= 0 ; i--) {
    reversed += str[i];
  }
  return reversed;
}

//   for(var i = theString.length; i > 0; i--){
//     if(i === theString.length){
//       var firstLetter = theString.substr(i - 1 , i);
//       var revString = firstLetter;
//     }
//     revString += theString.substr(i - 1 , i);
//   }
//   return revString;
// }
/**************************************************/

/*
2 : Write a function named 'palindromeChecker' ...

This function will take one argument, a string.

If the provided string is a palindrome (the same backwards and forwards), return
true, otherwise return false.
*/

/************** Your Solution Here ****************/
function palindromeChecker(word) {
    var palindrome = reverse(word);
    if (palindrome === word){
      return true;
    } else {
      return false;
    }
}
/**************************************************/

/*
3 : Write a function named 'isPrime' ...

This function will take one argument, a whole number.

If the provided number is prime, return true, otherwise, return false.
*/

/************** Your Solution Here ****************/
function isPrime(num){
  for (var i = 2; i < num ; i++){ //want to go up to num... dont want num itself or that
    //would give us a false negative (should be true if it were to only break at itself)
    if(num % i === 0){
      var bool = false;
      return false;
    }
  }
  return true;
}
//***Can use i < Math.sqrt(num) to run test way fewer times. Only have to test up
//to a number's square root
/**************************************************/

/*
4 : Write a function named 'computeTax'.

This function will take one or two arguments.

* The first argument will always be the amount tendered.

* The second argument, which is optional, could be the tax percentage (as a
whole number). If no second argument is provided, assume the tax rate is 7.5%.

Once applying the correct amount of tax, return the amount of tax owed.
*/

/************** Your Solution Here ****************/
function computeTax(tendered, tax){

  if(isNaN(tax)){
    tax = .075;
  }
  else{
    tax = tax/100;
  }

  // tendered = x * (tax + 1)
  x = tendered * (tax);
  return x;
}
/**************************************************/
