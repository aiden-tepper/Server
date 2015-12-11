
var firebase = new Firebase("https://into-the-5ire.firebaseio.com/");

function update(data){
  $("#feedback-list").html("<br>");
  for(var fbelem in data){
    var elem = data[fbelem];
    var feedbackList =
    "<div id='" + fbelem + "'><h3><i>" + elem.timestamp + ":</i></h3>" +
    "<h3>" + elem.fullname + " - " + elem.feedback + "</h3>" +
    "<h3>" + elem.faves + " favorites</h3>" +
    "<img id='heart' src='img/heart_outlined.png' width='5%'>" + "</div>";
    $("#feedback-list").append(feedbackList);
    $("#feedback-list").append("<br>");
    $("#" + fbelem).data("id", fbelem);
    $("#" + fbelem).data("faves", elem.faves);
  }
  addEventListeners();
}

function addEventListeners() {

  $(document).on({
    mouseenter: function() {
      $(this).attr("src", "img/heart_filled.png");
      console.log("filled");
    },
    mouseleave: function() {
      $(this).attr("src", "img/heart_outlined.png");
      console.log("outlined");
    }
  }, "#heart");

  $(document).on({
    click: function(){
      var key = $(this).parent().data("id");
      var faves = $(this).parent().data("faves");
      faves ++;
      firebase.child(key).update({
        "faves": faves
      });
    }
  }, "#heart");

  $("#submit_button").click(function(){
    $("#addModal").foundation("reveal", "close");
  });

}


function updateDOM() {

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
      "faves": 0
    };
    firebase.push(JSONObj, function(){
      console.log("Push to Firebase was successful");
    });
  });

}

$(document).ready(function(){
  updateDOM();
  console.log("Document loaded");
});
