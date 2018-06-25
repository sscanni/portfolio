function sentensify(str) {
    // Add your code below this line
    let arr = str.split(/\W+/g);    //Put the string into an array.
    let newstr = arr.join(" ");     //Take parse out the array elements into a string.
    return newstr;
    // Add your code above this line
  }
  console.log("String returned=" + sentensify("May-the-force-be-with-you"));

  /*
Functional Programming: Combine an Array into a String Using the join Method

The join method is used to join the elements of an array together to create a string. 
It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"

Use the join method (among others) inside the sentensify function to make a sentence from the 
words in the string str. The function should return a string. For example, 
"I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.

Your code should use the join method.
Your code should not use the replace method.
sentensify("May-the-force-be-with-you") should return a string.
sentensify("May-the-force-be-with-you") should return "May the force be with you".
sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".
sentensify("There,has,been,an,awakening") should return "There has been an awakening".

  */