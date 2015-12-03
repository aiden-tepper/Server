$(document).ready(function(){
  console.log("Document loaded");

  $("#submit_button").click(function(){
    $("#addModal").foundation("reveal", "close");
  });

  var firebase = new Firebase("https://into-the-5ire.firebaseio.com/");

  firebase.on("value", function(snapshot){
    var data = snapshot.val();
    console.log("Snapshot recieved:");
    console.log(data);
    update(data);
    console.log("Snapshot loaded into DOM");
    if(snapshot.val() == null) {
      $("#feedback-list").html("<br><h3>Be the first to add feedback!<h3>");
    }
  }, function(errorObject){
    console.log("The read failed: " + errorObject.code);
  });

  function update(data){
    $("#feedback-list").html("<br>");
    for(var fbelem in data){
      var elem = data[fbelem];
      if(elem.heart == "true") {
        var feedbackList =
        "<div><h3><i>" + elem.timestamp + ":</i></h3>" +
        "<h3>" + elem.fullname + " - " + elem.feedback + "</h3>" +
        "<img id='filled' src='img/heart_filled.png' width='5%'>" + "</div>";
        $("#feedback-list").append(feedbackList);
        $("#feedback-list").append("<br>");
      } else if (elem.heart == "false") {
        var feedbackList =
        "<div><h3><i>" + elem.timestamp + ":</i></h3>" +
        "<h3>" + elem.fullname + " - " + elem.feedback + "</h3>" +
        "<img id='outlined' src='img/heart_outlined.png' width='5%'>" + "</div>";
        $("#feedback-list").append(feedbackList);
        $("#feedback-list").append("<br>");
      }
    }
  }

  $("#add-form").submit(function(event){
    event.preventDefault();
    console.log("Form submitted");

    var fullname = $("#name").val();
    var feedback = $("#feedback").val();
    var date = new Date();
    var timestamp = date.toLocaleDateString() + " at " + date.toLocaleTimeString();

    var JSONObj = {
      "fullname":fullname,
      "feedback":feedback,
      "timestamp":timestamp,
      "heart":"false"
    };

    firebase.push(JSONObj, function(){
      console.log("Push to Firebase was successful: " + JSONObj.fullname);
    });

  });

  $("#outlined").hover(function(){
    $("#outlined").attr("src", "img/heart_filled.png");
  }, function(){
    $("#outlined").attr("src", "img/heart_outlined.png");
  });

  $("#filled").hover(function(){
    $("#filled").attr("src", "img/heart_outlined.png");
  }, function(){
    $("#filled").attr("src", "img/heart_filled.png");
  });

});
