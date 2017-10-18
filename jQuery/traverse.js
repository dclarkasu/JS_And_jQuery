console.log("loaded");
$("h1").text("Hello Daniel");

var arr = [
  "Banana", "Coconut", "Nuts", "Fruit Balls", "Boys"
];

var thing = $('ul');
console.log(thing);

var listKids = $('ul').children();

listKids.each(function(i){
  listKids.eq(i).text(arr[i]);
});
