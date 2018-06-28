function spinalCase(str) {
  let newArr = [];
   newArr = str.match(/[a-z]+|[A-Z][a-z]+/g);
   str = newArr.join("-").toLowerCase();
   return str;
  }
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase('thisIsSpinalTap'));
  console.log(spinalCase('The_Andy_Griffith_Show'));
  console.log(spinalCase('Teletubbies say Eh-oh'));
  console.log(spinalCase("AllThe-small Things"));

/*
Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".

*/