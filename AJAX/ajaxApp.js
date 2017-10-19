//Makes ajax call
$.ajax({
  //Declares properties of method
  type: 'GET',
  url : 'https://kkane106.github.io/data.json',
  dataType : 'json' //technically an array of objects
})
.done(function(data, status){
  //receives data automatically if successful request
  console.log('Success');
  console.log(data);

    data.forEach(function(i){
      var $h3 = $('<h3>');
      $h3.text(i.fname +' '+ i.lname);
      $('body').append($h3);

    })
})
.fail(function(xhr, status, error){
  //If request is unsuccessful
  console.log('Fail');
  console.log(error);
});
//Can chain .done and .fail onto .ajax
