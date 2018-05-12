// console.log(typeof "");
// console.log(typeof 0);
// console.log(typeof []);
// console.log(typeof {});
// for (x = 1; x < 10; x++) {
//     console.log("x=" + x);
// }
// x = 0;
// while (x < 20) {
//     console.log("x=" + x);
//     x++;
// }
function reverseString(str) {
    str = str.split('');
    console.log(str);
    console.log(typeof str);
    for (x = 0; x < str.length; x++) {
        console.log("str[" + x + "]=" + str[x]);
    }
    str = str.reverse();
    console.log(str);
    console.log(typeof str);
    str = str.join('');
    console.log(str);
    console.log(typeof str);
    return str;
  }
    console.log(reverseString("hello"));