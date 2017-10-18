$(document).keydown(function(e){
  // console.log("key pressed");
});

var previousRedKey;
var previousBlueKey;

$(document).keypress(function(e){
  var currentKey = e.key;
  if(currentKey === 'p') {
    moveCar($('#car1'));
    previousRedKey = currentKey;
    // console.log("red car moves");
  }

  if(currentKey === 'q') {
    moveCar($('#car2'));
    previousBlueKey = currentKey;
    // console.log("blue car moves");
  }
});

var moveCar = function(car, action){
  var marginIncrease = $(car).css('margin-left', '+=15px');
  // console.log(marginIncrease);
  //How we get the right (leading) edge of our square:
  //Take the left margin (which continously grows) and add the width
  //of the square.
  var finishLine = parseInt(car.css('margin-left'))
  + parseInt(car.css('width'));
  console.log(finishLine);

  if (finishLine > $(window).width()) {
//Every JS object has inherent properties which we're accessing
    alert(car[0].id + " WON!")
  }
  console.log($(window).width());
};
