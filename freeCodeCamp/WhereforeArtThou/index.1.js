function whatIsInAName(collection, source) {
    var arr2 = [];
    let newArray = [];
    let matches = 0;
    arr2 = Object.getOwnPropertyNames(source);
    // arr2.forEach(function(element) {
    //  console.log(element + "=" + source[element]);
    // });
    collection.forEach(function(element) {
      arr = Object.getOwnPropertyNames(element);
      matches = 0;
      for (let x=0;x<arr.length;x++) {
          for (let y=0;y < arr2.length;y++) {
            if (arr[x] == arr2[y] && element[arr[x]] == source[arr2[y]]) {
              matches++;
            }
          }
      }
      if (matches == arr2.length) {
        newArray.push(element);
      }
    });



      //console.log("collection=" + arr);
  //    for (let x=0;x<arr2.length;x++) {
       // console.log(arr2[x] +  "=" + element[arr2[x]]);
        // arr.forEach(function(item) {
        //   if (arr2[x] == item && element[arr2[x]] == source[item]) {
        //      matches++;
        //   }
    //    }
    //  }
    //}
    
  //   // Only change code above this line
     console.log(newArray);
     return newArray;

}
  
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 
// should return [{ first: "Tybalt", last: "Capulet" }].

//whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) 
// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

//whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

//whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) 
// should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

//whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) 
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) 
//should return []

     
    // if ('first' in collection[0]) {
    //     console.log(collection[0]['first']);
    // }

    // for(var x=0;x < collection.length;x++) {
    //     if (Object.keys(collection[x])[1] == Object.keys(source)[0]) {
    //         console.log(collection[x][1]);
    //     }
    // }

    //console.log(collection[0].hasOwnProperty('first'));
    //console.log(Object.keys(collection[0])[0]);
    //console.log(Object.keys(collection[0])[1]);
    //console.log(Object.keys(source)[0]);