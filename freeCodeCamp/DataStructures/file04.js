function htmlColorNames(arr) {
    // change code below this line

    arr.splice(0,1, 'DarkSalmon');
    arr.splice(1,1, 'BlanchedAlmond');
    // change code above this line
    return arr;
  } 
   
  // do not change code below this line
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

  /*We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. 
    Modify the function using splice() to remove the first two elements of the array and 
    add 'DarkSalmon' and 'BlanchedAlmond' in their respective places. */