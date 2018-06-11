const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    // return {
    //   name: name,
    //   age: age,
    //   gender: gender
    // };
  const Person = { name, age, gender }; //Object created from strings that were passed.
  return Person;
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object