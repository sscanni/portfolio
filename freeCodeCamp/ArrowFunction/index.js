const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";

  let newArr = [];

  newArr = arr.filter(arrElement => Number.isInteger(arrElement)); 
  newArr = newArr.map(x => Math.pow(x,2));

  return newArr;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);