$(document).ready(function(){
  console.log("Document loaded");

  var firebase = new Firebase("https://into-the-5ire.firebaseio.com/");

  firebase.on("value", function(snapshot){
    var data = snapshot.val();
    console.log("Snapshot recieved:");
    console.log(data);
    update(data);
  }, function(errorObject){
    console.log("The read failed: " + errorObject.code);
  });

  function update(data){
    var feedbackList =
    "<div>Name: " + data.firstname +
    "<div>Email: " + data.email +
    "<div>Feedback: " + data.feedback;
    console.log("Data: " + JSON.stringify(data));
    console.log("Data0: " + data[1]);
    $("#feedback-list").html(feedbackList)
  }

  $("#add-form").submit(function(event){
    event.preventDefault();
    console.log("Form submitted");

    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();
    var feedback = $("#feedback").val();

    var JSONObj = {
      "firstname":firstname,
      "lastname":lastname,
      "email":email,
      "feedback":feedback,
    };

    firebase.push(JSONObj, function(){
      console.log("Push to Firebase was successful");
    });

  });

});
