function uniteUnique(arr) {
    let array = [];
    array = arguments[0].slice();

    for (let x=1;x<arguments.length;x++) {
       let temp = [];
       temp = arguments[x].slice();
       for (let i=0;i<temp.length;i++) {
          let dupe = false;
          for (let y=0;y<array.length;y++) {
                if (temp[i] == array[y]) {
                   dupe = true;
                }
          }
          if (!dupe) {
              array.push(temp[i]);
          }
        }
    }
    console.log(array);

    return array;
  }
  
 // uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
  // uniteUnique([1, 2, 3], [5, 2, 1]);
  // uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

 /*
Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

*/