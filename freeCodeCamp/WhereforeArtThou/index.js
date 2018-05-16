function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];

    console.log(collection[0].hasOwnProperty('first'));
    console.log(Object.keys(collection[0])[0]);
    console.log(Object.keys(collection[0])[1]);
    console.log(Object.keys(source)[0]);
    
    if ('first' in collection[0]) {
        console.log(collection[0]['first']);
    }

    for(var x=0;x < collection.length;x++) {
        if (Object.keys(collection[x])[1] == Object.keys(source)[0]) {
            console.log(collection[x][1]);
        }
    }
     
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });