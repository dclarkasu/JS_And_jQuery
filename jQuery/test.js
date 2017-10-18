//performs action upon browser loading
$(document).ready(function(){
  console.log("Hello DC!");
});

$('.title').on('click', function(){
  console.log('Event');
  $('.title').text('Howdy');
});

$('.title').on('dblclick', function(){
  console.log('Listen');
  $('.title').text('Hola');
});

$('#btn1').click(function(e){
  alert('button clicked');

});
//turns button on and off
$('#btn2').click(function(e){
  if($(this).text() === 'On') {
    $(this).text('Off');
  } else {
    $(this).text('On');
  }
});

$('#btn3').click(function(e){
  var p = prompt('Enter Text Here');
});

//Taking in info from a form and adding it to an object
$(register.submit).click(function(e) {
  e.preventDefault();
  var user = {};
  console.log($(register.fName).val());
  console.log($(register.lName).val());
  user.userName = $(register.userName).val();
  user.firstName = $(register.fName).val();
  user.lastName = $(register.lName).val();

console.log(user);
  // personInfo.reset();
});
//******************************************************
//Dynamically Creating Elements
//Create Node
var h3 = $('<h3>');
//Configure
h3.text('SD12');
h3.attr('id', 'header');//creates id attribute
//Append
$('body').append(h3);


var helloH3 = $('<h1>');
helloH3.text('Hello World');
helloH3.attr('class', 'header');
$('body').append(helloH3);

//Creating Nested Elements
//Create Node
var arr = ['Gladiator', 'Braveheart', 'Warrior', '13 Hours', 'Guardians of the Galaxy',
  'Tombstone', 'Tangled'];
var ol = $('<ol>');

//Create all list items and add to parent ol
arr.forEach(function(val, idx, array){
  var li = $('<li>');
  li.text(val);
  ol.append(li);
});

//append ol to element where you want it in the browser
$('body').append(ol);
//******************************************************
//Appending a Form to the DOM
var buildSignUpForm = function(){
  var $form =$('<form name="signUp">');

  var fNameInput = $('<input>'); //text type is default for input
  fNameInput.attr('name', 'fName');
  fNameInput.attr('placeholder', 'First Name');

  var lNameInput = $('<input>'); //text type is default for input
  lNameInput.attr('name', 'lName');
  lNameInput.attr('placeholder', 'Last Name');

  var emailInput = $('<input>'); //text type is default for input
  emailInput.attr('name', 'email');
  emailInput.attr('placeholder', 'Email');

  var passwordInput = $('<input>'); //text type is default for input
  passwordInput.attr('name', 'password');
  passwordInput.attr('placeholder', 'Password');

  var submitInput = $('<input type="submit">');
  submitInput.val('Submit');
  //MUST ASSIGN EVENT LISTENER TO THE VARIABLE NAME OF THE THING YOU CREATED
  submitInput.click(function(e){
    e.preventDefault();
    console.log('clicked');

    var newUser = {};
    newUser.firstName = $(signUp.fName).val();
    newUser.lastName = $(signUp.lName).val();
    newUser.email = $(signUp.email).val();
    newUser.password = $(signUp.password).val();
    console.log(newUser);
  });

  //append everything to the form
  $form.append(fNameInput, lNameInput, emailInput, passwordInput, submitInput);
  //append the form to the page element
  $('#RegisterBtn').append($form);
};
//EL that calls the method to bring up the sign up form
$('#signUpBtn').click(function(){
  buildSignUpForm();
  $(this).remove();
  //removes button so that it doesn't stay and allow for duplicate forms each click
});
//******************************************************
