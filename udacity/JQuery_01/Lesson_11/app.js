/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
function runjs() {
    // $("<div id='family2'></div>").insertAfter("#family1");

    // $( "#family2" ).append( "<h1>Family 2</h1>" );

    // $( "#family2" ).append( "<div id='bruce'>" );

    // $( "#bruce" ).append( "<h2>Bruce</h2>" );
    
    // $( "#bruce" ).append( "<div id='madison'>" );

    // $('#madison').append( "<h3>Madison</h3>" );

    // $( "#bruce").append( "<div id='hunter'>" );

    // $( "#hunter").append( "<h3>Hunter</h3>" );

//This is how the instructor of the course did it:
let family1, family2, bruce, madison, hunter;

family1 = $( "#family1" );

family2 = $("<div id='family2'><h1>Family 2</h1></div>");

bruce = $("<div id='bruce'><h2>Bruce</h2></div>");

madison = $("<div id='madison'><h3>Madison</h3></div>");

hunter = $("<div id='hunter'><h3>Hunter</h3></div>");

family2.insertAfter(family1);

family2.append(bruce);

bruce.append(madison);

bruce.append(hunter);
    
}