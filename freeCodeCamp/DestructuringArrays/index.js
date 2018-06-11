let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [b, a];
  // change code above this line
})();
console.log("a = " + a); // should be 6
console.log("b = " + b); // should be 8