
function runjs() {
    // Lesson_02_04();
    // Lesson_02_03();
    //Lesson_02_13();
}    
$(document).ready(function(){
    $("button").click(function(){
        //Lesson_02_05(); // Call function to set font to 40px.
        //Lesson_02_08();
        Lesson_02_13();
    });
    // Lesson 02_07
    $('#input').on('change', function() {
        let val;
        val = $('#input').val();
        articles = navList = $(".articles");
        h1 = articles.children("h1");
        h1.text(val);
    });
});
/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/
function Lesson_02_13() {
// $( "p" ).each(function( index ) {
//     let pText = $( this ).text();
//     let strText = pText + pText.length;
//     $(this).text(strText);
// });
// or
    function numberAdder() {
        let text, number;
        text = $(this).text();
        number = text.length;
        $(this).text(text + " " + number);
    }
    $( "p" ).each(numberAdder);

    return;
}

//Remove DOM elements
function Lesson_02_08() {
    let articleItems;
    articleItems = $(".article-item");
    ulList = articleItems.children("ul"); 
    ulList.remove();
//  or 
//  ulList = articleItems.find("ul"); 
//  ulList.remove();

//  also if only wanted to remove a specific ul element:
//  ul.children().remove("bold");
//  This would only remove "James" from the list.
    return;
}
function Lesson_02_05() {
    let articleItems;
    articleItems = $(".article-item");
    articleItems.css( "font-size", "40px");
    return;
}
function Lesson_02_04() {
    let navList;
    navList = $(".nav-list");
    firstItem = navList.children().first(); 
    link = firstItem.find("a");
    link.attr('href', '#1');
    return;
}
function Lesson_02_03() {
    let article2, article3;
    article2 = $('.featured');
    article3 = article2.next();
    article2.toggleClass("featured");
    article3.toggleClass("featured");
    return;
}
// function Lesson_02_02() {
//     let featuredArticle;
//     featuredArticle = $('.article-item featured');
//  // or
//  // featuredArticle = $('.featured');
//     featuredArticle.toggleClass("featured");
//     console.log(featuredArticle);
//     return;
// }
// function Lesson_01_12() {
//     let articleList, h1, kids, parents;
//     let articleList = $('.article-list');
//     let h1 = articleList.siblings("h1"); 
//     let kids = articleList.children(); 
//     let parents = articleList.parents(); 
//     console.log(articleList);
//     console.log(h1);
//     console.log(kids);
//     console.log(parents);
//     return;
// }
