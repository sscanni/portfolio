/* This passed all tests but not mine version */

function smallestCommons(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var x = max;

  for(var i = max; i >= min; i--) {
    if(x % i !== 0) {
      x += max; 
      i = max;
    } 
  }

  return x;  
}  
console.log(smallestCommons([23,18]));