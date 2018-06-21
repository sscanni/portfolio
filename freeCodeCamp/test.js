// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
"Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (bookList, s) {
     let arr = bookList.slice(0);
     console.log(arr);
     return arr;
    }


// arr = bookList.slice(0);
// console.log(arr);
console.log(add(bookList,"Steve"));
