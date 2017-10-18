$('#shipBtn').click(function(e){
  e.preventDefault();
  console.log('hi');

  var order = {};
  order.firstName = $(contact.fname).val();
  order.lastName = $(contact.lname).val();
  order.street = $(contact.street).val();
  order.city = $(contact.city).val();
  order.state = $(contact.state).val();
  order.zipCode = parseInt($(contact.zip).val());
  console.log(order);
  console.log(verifyFormData(order));
  if (arr.length > 0) {
    displayErrors();
  } else {
    printOrder(order);
  }
});

var arr = [];

var verifyFormData = function(order){
  var bool = true;
  arr = [];
  for(var prop in order) {
    if (order[prop] === '') {
      arr.push("Missing field " + prop + ". Please fill out all fields.");
      bool = false;
    }
  }
  if (order.zipCode.toString().length !== 5 || isNaN(order.zipCode)) {
    arr.push("Invalid zip code.");
    bool = false;
  }
  if (order.state.length !== 2) {
    arr.push("Please enter a valid state abbreviation");
    bool = false;
  }
  return bool;
};

var displayErrors = function(){
  var ul = $('<ul>');
  arr.forEach(function(val, idx){
    var li = $('<li>');
    li.text(val);
    ul.append(li);
  });
  $('#displaySpace').append(ul);
};

var printOrder = function(order){
  var ul = $('<ul>');
  for (var prop in order) {
    var li = $('<li>');
    li.text(prop + " : " + order[prop]);
    ul.append(li);
    }
    $('#displaySpace').append(ul);
  };
