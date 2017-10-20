$(document).ready(function(){
  tableRequest("", generateTable);
  //Listener for newPokemon Form
  $(newPokemon.submit).click(createNewPokemon);
});


var generateTable = function(data, status){
  console.log(data);
  //Create table Head
  var $table = $('<table>');
  //Labels for headers
  var $tHeaderIndex = $('<th>').text('Pokedex Id');
  var $tHeaderName = $('<th>').text('Name');
  //Append header labels to a row
  var $tHeadRow = $('<tr>').append($tHeaderIndex).append($tHeaderName);
  var $tHead = $('<thead>').append($tHeadRow);
  //Append Head to Table
  $table.append($tHead);


  //Create table body
  var $tBody = $('<tbody>');
  //Creates and populates each row with 2 data portions, index and name from data
  data.forEach(function(poke, index){
    var $tRow = $('<tr>');
    var $tDataIndex = $('<td>').text(poke.pokeId);
    var $tDataName = $('<td>').text(poke.name).attr('class', 'pokeName').attr('id', poke.pokeId);
    //Append each row to the body element every iteration
    $tRow.append($tDataIndex).append($tDataName);
    $tBody.append($tRow);
    //Determines every other index and gives it a class for styling purposes
    if (index % 2 === 0) {
      $tRow.attr('class', 'even');
    }
  });

  //Give table body
  $table.append($tBody);
  //Give content div on html page the table and data to display
  $('#content').html('').append($table);
  //Assigns a click event listener to every <td> with the class "pokeName"
  $('.pokeName').click(nameCallbackHandler);
};

var nameCallbackHandler = function(){
  console.log("Callback click " + this.id);
  tableRequest("/"+this.id, showPokemon);

};

//Populates Pokemon meta data
//Has data passed from .done()
var showPokemon = function(data){
  console.log(data);
  var $containerDiv = $('<div>').attr('id', 'containerDiv');
  var $picDiv = $('<div>').attr('id', 'picDiv');
  var $statsDiv = $('<div>').attr('id', 'statsDiv');
  var $detailDiv = $('<div>').attr('id', 'detailDiv').text(data.description);
  var $img = $('<img>').attr('src', data.img).attr('alt', 'picture of ' + data.name);
  var $name = $('<h2>').text(data.name);
  var $pId = $('<h4>').text('Poke Id: ' + data.pokeId);
  //statsDiv data
  var $ul = $('<ul>');
  var $liWeight = $('<li>').text('Weight: ' + data.weight);
  var $liHeight = $('<li>').text('Height: ' + data.height);
  var $liExp = $('<li>').text('Experience: ' + data.exp);
  $picDiv.append($name).append($img).append($pId);

  //Get types out for a separate list
  var $pokeTypeList = $('<ul>').append($('<li>').text('Types: '));
  data.types.forEach(function(pokeType, idx){
    $pokeTypeList.append($('<li>').text(pokeType.name));
  });

  //Appending to parent elements and the body for display
  $ul.append($liWeight).append($liHeight).append($liExp);
  $statsDiv.append($ul).append($pokeTypeList);
  $containerDiv.append($picDiv).append($statsDiv).append($detailDiv);

  //Buttons for returning to the main list and delete
  var $returnBtn = $('<button>').attr('id', 'returnBtn').text('Return to List');
  var $deleteBtn = $('<button>').attr('id', 'deleteBtn').attr('id', data.pokeId).text('Delete Pokemon').click(deletePoke);

  $('#content').html("").append($containerDiv).append($returnBtn).append($deleteBtn);
  //Event Listeners must be after the button exists on the page

  //Back to List Button Listener
  $('#returnBtn').click(function(){
    console.log("click");
    tableRequest("", generateTable)
  });
  //Delete Pokemon event listener
  // $('#deleteBtn').click(deletePoke);
};


//AJAX Request which can either build the table or show just one pokemon
var tableRequest = function(pokeNum, callbackFunc){
  $.ajax({
    type : 'GET',
    url : 'http://52.25.225.137:8080/pokemon/data/poke' + pokeNum + '?sorted=true',
    dataType : 'json'
  })
  .done(callbackFunc)
  .fail(function(xhr, status, err){
    console.log("Failed Request");
    console.log(err);
  })
  $('#backBtn').hide();
};


var createNewPokemon = function(e){
  e.preventDefault();
  console.log("new poke");
  //Creates new object with data from form
  var newPoke = {
    pokeId : $(newPokemon.id).val(),
    name : $(newPokemon.name).val(),
    height : $(newPokemon.height).val(),
    weight : $(newPokemon.weight).val(),
    img : $(newPokemon.img).val(),
    description : $(newPokemon.description).val()
  };
  //POST Request to create new Pokemon
  $.ajax({
    type : 'POST',
    url : 'http://52.25.225.137:8080/pokemon/data/poke',
    dataType : 'json',
    contentType : 'application/json',
    data : JSON.stringify(newPoke)
  })
  .done(function(data){
    showPokemon(data);
  })
};

var deletePoke = function(){
  $.ajax({
    type : 'DELETE',
    url : 'http://52.25.225.137:8080/pokemon/data/poke/' + this.id
  })
  .done(function(data){
    tableRequest("", generateTable);
  })
};
