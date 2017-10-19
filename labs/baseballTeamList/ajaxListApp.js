$(document).ready(function(){
  //Event Listener for btn click
  $('#myButton').click(loadTeams);
});

//Loads the Teams, displaying names as url's
var loadTeams = function(){
  console.log("Load team button clicked");
  //AJAX request
  $.ajax({
    type : 'GET',
    url : 'http://kkane106.github.io/mlb.json',
    dataType : 'json'
  })
  .done(function(data, status){
    console.log(data);
    //first, create parent element
    var $ul = $('<ul>');
    data.forEach(function(team){
      //dynamically create inner elements with the attribute allowing it to be a link (href)
      var $anchor = $('<a>').text(team.name).attr('href', team.url);
      var $li = $('<li>').append($anchor);
      //add each li to the list every iteration
      $ul.append($li);
    })
    //Once list is populated, append it to body in html
    $('body').append($ul);
    $('#myButton').hide();
  })
  .fail(function(xhr, status, err){
    console.log("Request Failed");
    console.log(err);
  })
};
