$(document).ready(function(){
  $("#contact-form").submit(function(event){
    event.preventDefault();

    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();
    var message = $("#message").val();

    var JSONObj = {
      "First Name":firstname,
      "Last Name":lastname,
      "Email":email,
      "Message":message
    };

    console.log(JSONObj);

    $.post("http://x.mirman.org:1031/ground4loor", JSONObj, function(res){
      console.log(res);
    });

    //Use jQuery to collect the values from the fields and create a
    //JSON object containing them. Then, log the result to the console

    // Secondary Objective: Use the AJAX methods built into jQuery to send
    // The form data to http://x.mirman.org:1031. Write a callback to handle
    // the response.
  })
});
