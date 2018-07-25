
/* This did not pass this test:  smallestCommons([23, 18]) should return 6056820
    not sure why.
*/

function smallestCommons(arr) {

    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    let x = max;
    while (!isValidMulti(x, min, max)) {
        x += max;     
    }
    return x;

    function isValidMulti(x, min, max) {
      for (let y=min;y<max;y++) {
          if(x % y !== 0) {
            return false;
          }
      }
      return true;
    }
}
  console.log(smallestCommons([23,18]));

/*
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
divisible by all numbers between 1 and 3. The answer here would be 6.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.

*/