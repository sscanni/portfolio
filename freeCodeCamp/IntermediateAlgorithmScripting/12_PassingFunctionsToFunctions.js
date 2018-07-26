function myFunction(param){
    console.log('Hi, myFunction here!');
    console.log('I\'ve received a parameter: ', param);
  }
  function myOtherFunction(passedInFunction) {
    console.log('Hi, other function here!');
    console.log('I even have a parameter:', typeof passedInFunction);
    passedInFunction('Hi myFunction, myOtherFunction here!');
  }
  myOtherFunction(myFunction);
  // Hi, other function here!
  // I even have a parameter: function
  // Hi, myFunction here!
  // I've received a parameter:  Hi myFunction, myOtherFunction here!