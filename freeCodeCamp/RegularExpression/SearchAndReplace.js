let huhText = "This sandwich is good.";
let fixRegex = /good\b/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);
console.log("result=" + result);

