function splitify(str) {
    // Add your code below this line
    let arr = str.split(/\W+/g);    //Pull all of the words out and make each one an element of an array.
    return arr;
    // Add your code above this line
  }
  //let array = splitify("Hello World,I-am code");
  //let array = splitify("Earth-is-our home");
  let array = splitify("This.is.a-sentence");

//  console.log("array=" + array);

  //Two ways to write the forEach

  // array.forEach(function(element) {
  //   console.log(element);
  // });

  array.forEach((element) => {
    console.log("element=" + element);
  });

  /*

Functional Programming: Split a String into an Array Using the split Method
The split method splits a string into an array of strings. It takes an argument for the delimiter, 
which can be a character to use to break up the string or a regular expression. For example, 
if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, 
you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = str.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
Since strings are immutable, the split method makes it easier to work with them.

Use the split method inside the splitify function to split str into an array of words. 
The function should return the array. Note that the words are not always separated by spaces, 
and the array should not contain punctuation.

Your code should use the split method.
splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].
splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].

*/