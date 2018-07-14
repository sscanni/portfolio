function fearNotLetter(str) {
    let newStr = undefined;
    for (let x=0;x<str.length-1;x++) {
        if (str.charCodeAt(x)+1 != str.charCodeAt(x+1)) {
            let code = str.charCodeAt(x)+1;
            newStr = String.fromCharCode(code);
            break;    
        }
    }
    return newStr;
  }
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("abcdefghjklmno"));
  console.log(fearNotLetter("stvwx"));
  console.log(fearNotLetter("bcdf"));
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

  /*
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.



  */