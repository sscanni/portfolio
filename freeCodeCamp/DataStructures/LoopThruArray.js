function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let x=0; x <  arr[i].length; x++) {
            if (arr[i][x] == elem) 
                flag = true;
        }
        if (!flag)
            newArr.push(arr[i]);
    }
    return newArr;
    
    // change code above this line
    return newArr;
  }
  
  // change code here to test different cases:
  //console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));