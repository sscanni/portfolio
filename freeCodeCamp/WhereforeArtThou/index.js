function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    let matches = 0;

   console.log("------Process source parm------");
   
   arr = Object.getOwnPropertyNames(source);
   //console.log("source=" + arr);
  //   arr.forEach(function(element) {
  //    console.log(element + "=" + source[element]);
  //  });

   console.log("------Process collection parm------");

   collection.forEach(function(element) {
    arr2 = Object.getOwnPropertyNames(element);
     //console.log("collection=" + arr2);
   // for (let x=0;x<arr2.length;x++) {
     // console.log(arr2[x] +  "=" + element[arr2[x]]);
      // arr.forEach(function(item) {
      //   if (arr2[x] == item && element[arr2[x]] == source[item]) {
      //      matches++;
      //   }
  //    }
  //  }
  });
         //console.log(item + "=" + source[item]);
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet", first: "Steve" });

     
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

    console.log(Object.keys(source)[0]);
    console.log(Object.keys(source)[1]);
 for (let x=0;x < Object.keys(source).length; x++) {
    console.log(Object.keys(source)[x]);
 }


    collection.forEach((element) => {
        console.log("element.apple=" + element.apple);
      });
    