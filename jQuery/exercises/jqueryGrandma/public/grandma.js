$(document).ready(function(){
  buildForm();
});

var buildForm = function(){
  var $form = $('<form name="conversation" id="grandmaForm">');

  var say = $('<input>'); //text type is default for input
  say.attr('name', 'say');
  say.attr('placeholder', 'What do I say?');

  var submit = $('<input type="submit">');
  submit.val('Submit');
  submit.click(listenToGrandmaForm);
  $form.append(say, submit);
  $('body').append($form);
};

var listenToGrandmaForm = function(e){
  e.preventDefault();
  console.log('clicked');

  //the div it will be placed in
  var div = $('<div>');
  //what the user typed:
  var messageSay = $(grandmaForm.say).val();
  div.text(messageSay);

  $('#conversation').append(div);
  //Grandma response:
  var response = grandmaResponse(messageSay);
  var grandmaSay = $('<div>');
  grandmaSay.text(response);
  $('#conversation').append(grandmaSay);
};

var grandmaResponse = function(messageSay){
  if(messageSay === messageSay.toLowerCase()) {
    return 'U WAT M8?';
  }
    else if (messageSay === 'GOODBYE!') {
      $(grandmaForm.submit).off();
      return 'L8R M8';
    }
    else if (messageSay === messageSay.toUpperCase()){
      return 'UR A n00b HACKZOR!';
    }

};
