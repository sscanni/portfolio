function steamrollArray(arr) {
    let newArr = [];
    newArr = flatten(arr);
    return newArr;
}
    function flatten(arr) {
        var ret = [];
        for(var i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                ret = ret.concat(flatten(arr[i]));
            } else {
                ret.push(arr[i]);
            }
        }
        return ret;
    }

  
    console.log(steamrollArray([[["a"]], [["b"]]]));
    //console.log(steamrollArray([1, [2], [3, [[4]]]]));
  //console.log(steamrollArray([1, {}, [3, [[4]]]]));
/*
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/