function translatePigLatin(str) {
    
    if ((/^[aeiou]/).test(str)) {           //If a vowel.
        str = str + "way";
    } else {
        let arr = str.match(/^[^aeiou]+/);  //Otherwise it is a consonant.
        let len = arr[0].length;            //Match returns an array with different information. First elemet contain chars found.
        str = str.substring(len) + arr[0] + "ay";
    }
    return str;
  }

  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("paragraphs"));
  console.log(translatePigLatin("glove"));
  console.log(translatePigLatin("algorithm"));
  console.log(translatePigLatin("eight"));

/*
Intermediate Algorithm Scripting: Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the end of the word.
Should handle words without vowels.

*/