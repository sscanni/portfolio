function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];

    console.log(collection[0].hasOwnProperty('first'));
    console.log(Object.keys(collection[0])[0]);
    
    for(var x=0;x < collection.length;x++) {
        if (collection[x].Property == source.last) {
            console.log(collection[x].last);
        }
    }
     
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });