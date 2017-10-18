/*
1 : Create an object representing a square ...

Square has several properties:

* `xPos`, a number, the x-coordinate at which the square's top left corner is located

* `yPos`, a number, the y-coordinate at which the square's top left corner is located

* `width`, a number, the width of the square (in pixels)

* `height`, a number, the height of the square (in pixels)

* `color`, a string, the rgb color of the square (for example `'rgb(200,0,0)'` is red)


This square object is the representation of the state of the square displayed in
the browser. Updates made to this object will be represented visually.
*/

// var square;
var square = {
  xPos : 20,
  yPos : 20,
  width : 100,
  height : 100,
  color : "rgb(200, 0, 0)"
};

/*********************************************/

/*
2 : Create a method on the square object named 'moveUp' ...

'moveUp' takes no arguments, it will reference its invoking object.

When 'moveUp' is invoked it should adjust the yPos property of it's
invoking object by reducing the current value by 5.

When 'moveUp' is complete, refresh the browser and press the up arrow on your
keyboard, the square should move up.
*/

/***************Your Solution****************/
square.moveUp = function() {
  this['yPos'] -= 5;
}
/*********************************************/

/*
3 : Create a method on the square object named 'moveDown' ...

'moveDown' takes no arguments.

When 'moveDown' is invoked it should adjust the yPos property of it's invoking
invoking object by reducing the current value by 5.

When 'moveDown' is complete, refresh the browser and press the down arrow on your
keyboard, the square should move down.
*/

/***************Your Solution****************/
square.moveDown = function() {
  this['yPos'] += 5;
}
/*********************************************/

/*
4 : Create a method on the square object named 'moveLeft' ...

'moveLeft' takes no arguments.

When 'moveLeft' is invoked it should adjust the xPos property of it's invoking
invoking object by reducing the current value by 5.

When 'moveLeft' is complete, refresh the browser and press the left arrow on your
keyboard, the square should move left.

*/

/***************Your Solution****************/
square.moveLeft = function() {
  this['xPos'] -= 5;
}
/*********************************************/

/*
5 : Create a method on the square object named 'moveRight' ...

'moveRight' takes no arguments.

When 'moveRight' is invoked it should adjust the xPos property of it's invoking
invoking object by increasing the current value by 5.

When 'moveRight' is complete, refresh the browser and press the right arrow on your
keyboard, the square should move right.
*/

/***************Your Solution****************/
square.moveRight = function() {
  this['xPos'] += 5;
}
/*********************************************/

/*
6 : Assign the 'walls' variable an object ...

The object should have a xPos, yPos, width, and height properties.

This object will represent the size of the canvas board (width 900, height 600).

Canvas boards start at their upper left corner (0,0)
*/
var walls;
/***************Your Solution****************/
walls = {
  xPos : 0,
  yPos : 0,
  width : 900,
  height : 600
};
/*********************************************/

/*
7 : Create a method on the 'walls' object named 'checkCollision' ...

'checkCollision' will accept two arguments :

* the first argument is another object (the square say), with properties:
  * xPos
  * yPos
  * width
  * height

* the second argument is a string, representing the direction of movement
attempted (e.g. if the square is moving to the left, we will pass 'left') here.

'checkCollision' will return true if any of the following are true :
  * the object provided as an argument is moving 'left' AND its x position is
  less than or equal to the x position of the wall
  * ...moving 'right' AND x position and width are greater than the walls x
  position and width
  * ...moving 'up' AND y position ...
  * ...moving 'down' AND y position ...

Otherwise, return false.
*/

/***************Your Solution****************/
walls.checkCollision = function(shape, direction) {
    if(shape.xPos <= walls.xPos && direction === 'left') {
      return true;
    }
    else if(direction === 'right' && (shape.xPos + shape.width) >= (walls.xPos + walls.width)) {
      return true;
    }
    else if(direction === 'up' && shape.yPos <= walls.yPos) {
      return true;
    }
    else if(direction === 'down' && (shape.yPos + shape.height) >= (walls.yPos + walls.height)) {
      return true;
    }
      return false;



}
/*********************************************/

/*
8 : Add your 'walls' object to the 'collidables' array ...

In a more robust game/application it is likely that there would be multiple
objects that you could potentially collide with. As such, you would want to
check each of their 'checkCollision' methods every cycle. Placing all of them in
an array makes this simple.
*/

var collidables = [];
/***************Your Solution****************/
collidables.push(walls);
/*********************************************/


/*
9 : Create a method on the square object named 'checkForCollisions' ...

'checkForCollisions' accepts one argument, a string, representing the movement
which just occured. (e.g. if you press the up arrow, it would pass 'up').

Iterate over the 'collidables' array, for each collidable, call the
'checkCollision' method, passing the square object and move to it.

If 'checkCollision' return true, return true from 'checkForCollisions',
otherwise return false.
*/

/***************Your Solution****************/
square.checkForCollisions = function(movement) {
    var isCollided = false;
    collidables.forEach(function(element) {
      var bool = element.checkCollision(square, movement);
      // console.log("before if: " + element);
      // console.log(bool);
      if (bool) {
        isCollided = true;
      }
    });
    return isCollided;
}
/*********************************************/

/*
10 : Modify each of your 'move...' methods on square ...

Call 'checkForCollisions' and provide the corresponding move as a string.

If 'checkForCollisions' returns true, do not change the position (return instead)

Otherwise move normally.
*/
/***************Your Solution****************/

square.moveUp = function() {
  if (!this.checkForCollisions('up')) {
    this['yPos'] -= 5;
  }
}
square.moveDown = function() {
  if (!this.checkForCollisions('down')) {
    this['yPos'] += 5;
  }
}
square.moveLeft = function() {
  if (!this.checkForCollisions('left')) {
    this['xPos'] -= 5;
  }
}
square.moveRight = function() {
  if (!this.checkForCollisions('right')) {
    this['xPos'] += 5;
  }
}
/*********************************************/
