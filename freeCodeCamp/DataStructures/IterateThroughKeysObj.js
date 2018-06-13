let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function countOnline(obj) {
    // change code below this line
    let x=0;
  for (let user in obj) {
       console.log(obj[user].online);
       if (obj[user].online == true)
          x++;
  };
  return x;
    // change code above this line
  }
  
  console.log(countOnline(users));