// $('#helloWorld').text('Hello World');
// console.log($('.header'));
// console.log($('#title2'));
// console.log($('ul'));
// $('#title3').text("Title 3");
// $('#title1, #title2').text("Daniel is da bomb");
// console.log($('#title3').text());

console.log($("ul").children());//gets list's children
console.log($("ul").children().text());//gets the contents of those children
console.log($("ul").parent());//list parent
console.log($("ul").parent().parent()); //Same as below
console.log($('#wrapperDiv').parent());// same as above
console.log($("ul").children().eq(1).text());//the text content of the 2nd list item
