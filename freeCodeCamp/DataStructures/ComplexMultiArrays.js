let nestedArray = 
  [ // top, or first level - the outer most array
    ['deep'], // an array within an array, 2 levels of depth
    [
      ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
    ],
    [
      [
        ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
      ],
      [
        [
          ['deepest-est?'] // an array nested 5 levels deep
        ]
      ]
    ]
  ];

  let testArr = [['deep'], // an array within an array, 2 levels of depth
                [['deeper'], ['deeper']], // 2 arrays nested 3 levels deep
                [[['deepest'], ['deepest']], // 2 arrays nested 4 levels deep
                [[['deepest-est?']]]]]; // an array nested 5 levels deep

  let newArr =  [['unshift', false, 1, 2, 3, 'complex', 'nested'], //  2 levels of depth
                [['deep'], ['concat', false, true, 'spread', 'array']], // 3 levels deep
                [[['deeper'], ['mutate', 1327.98, 'splice', 'slice', 'push'],['concat', false, true, 'spread', 'array']], // 4 levels deep
                [[['deepest'],['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']]]]]; // 5 levels deep
/* We have defined a variable, myNestedArray, set equal to an array. 
   Modify myNestedArray, using any combination of strings, numbers, and 
   booleans for data elements, so that it has exactly five levels of depth 
   (remember, the outer-most array is level 1). Somewhere on the third level, 
   include the string 'deep', on the fourth level, include the string 'deeper', 
   and on the fifth level, include the string 'deepest'. */

   let myNestedArray = [
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // change code above this line
  ];

console.log("newArr[0]=" + newArr[0]);
console.log("newArr[1]=" + newArr[1]);
console.log("newArr[1][0]=" +newArr[1][0]);
console.log("newArr[1][1]=" +newArr[1][1]);
console.log("newArr[2]=" + newArr[2]);
console.log("newArr[2][0]=" +newArr[2][0]);
console.log("newArr[2][0][0]=" +newArr[2][0][0]);
console.log("newArr[2][1][0]=" +newArr[2][1][0]);


// console.log("nestedArray[0]=" + nestedArray[0]);
// console.log("nestedArray[1]=" + nestedArray[1]);
// console.log("nestedArray[1][0]=" +nestedArray[1][0]);
// console.log("nestedArray[1][1]=" +nestedArray[1][1]);
// console.log("nestedArray[2]=" + nestedArray[2]);
// console.log("nestedArray[2][0]=" +nestedArray[2][0]);
// console.log("nestedArray[2][0][0]=" +nestedArray[2][0][0]);
// console.log("nestedArray[2][1][0]=" +nestedArray[2][1][0]);

// console.log("testArr[0]=" + testArr[0]);
// console.log("testArr[1]=" + testArr[1]);
// console.log("testArr[1][0]=" +testArr[1][0]);
// console.log("testArr[1][1]=" +testArr[1][1]);
// console.log("testArr[2]=" + testArr[2]);
// console.log("testArr[2][0]=" +testArr[2][0]);
// console.log("testArr[2][0][0]=" +testArr[2][0][0]);
// console.log("testArr[2][1][0]=" +testArr[2][1][0]);

  

  // console.log(nestedArray[2][1][0][0][0]);
  // console.log(testArr[2][1][0][0][0]);