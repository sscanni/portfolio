function alphabeticalOrder(arr) {
    return arr.sort(function(a, b) {
          return a > b;
        });
    }
    
    // Add your code above this line
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
  console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));
  console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));

  /*

The sort method sorts the elements of an array according to the callback function.

For example:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a < b;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
Note: It's encouraged to provide a callback function to specify how to sort the array items. JavaScript's default 
sorting method is by string Unicode point value, which may return unexpected results.


Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

Your code should use the sort method.
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].
alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].
alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].

  */