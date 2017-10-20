//Works like document.ready but without the need for jQuery
//Also allows script tag to be at the top of the page instead of last in body
window.onload = function() {
  console.log("Window loaded");
  //instance of XMLHttpRequest Object
  var xhr = new XMLHttpRequest();

  //Creates the request, says what type of method, and where to go
  xhr.open('GET', 'https://kkane106.github.io/data.json', true);
  //Every time readyState changes an event happens = onreadystatechange
  xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    //Condition checks for request to be DONE (4) and a status code less than 400 is ok
    if (xhr.status < 400 && xhr.readyState === 4) {

      //Parses data into a JSON object
      var data = JSON.parse(xhr.responseText);
      console.log(data);

      //print out first and last name of each object
      data.forEach(function(element){
        console.log(element.fname);
        console.log(element.lname);
      });

    }
    //The request would be DONE(4) but an error status code above 400
    if (xhr.status >= 400 && xhr.readyState === 4) {
      console.error('Error!');
    }
  };
  //Must actually send request
  xhr.send(null);

}
