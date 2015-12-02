
var buttonclick = new Audio("mp3/click.mp3");
var success = new Audio("mp3/success.mp3");


var tenant1 = {
  name: "Melanie",
  accessToken : "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed",
  url : "https://api-http.littlebitscloud.cc/v2/devices/" + "243c200bfb71" + "/output"
};

var tenant2 = {
  name: "Nina",
  accessToken : "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed",
  url : "https://api-http.littlebitscloud.cc/v2/devices/" + "00e04c1edc71" + "/output"
};

var tenant3 = {
  name: "Lauren",
  accessToken : "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed",
  url : "https://api-http.littlebitscloud.cc/v2/devices/" + "00e04c1ef6bb" + "/output"
};

var tenant4 = {
  name: "Julie",
  accessToken : "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed",
  url : "https://api-http.littlebitscloud.cc/v2/devices/" + "00e04c1f081c" + "/output"
};


var postdata = JSON.stringify({
  "percent": 100,
  "duration_ms": 32000
});


function post(tenant) {
  console.log("Clicked on " + tenant.name);
  post(tenant);
  again(tenant);
  again(tenant);
  again(tenant);
  again(tenant);
  again(tenant);
}


function again(tenant) {
  var now = Date.now();
  var target = now += 30000;
  console.log("waiting 30 seconds")
  while(true) {
    if(now == target) {
      barepost(tenant);
      break;
    }
  }
};


function barepost(tenant) {
  $.ajax({
    url: tenant.url,
    type: "post",
    dataType: "json",
    data: postdata,
    headers: {
      "Accept": "application/vnd.littlebits.v2+json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tenant.accessToken
    }
  });
}


function post(tenant) {
  $.ajax({
    url: tenant.url,
    type: "post",
    dataType: "json",
    data: postdata,
    headers: {
      "Accept": "application/vnd.littlebits.v2+json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tenant.accessToken
    },
    success: function() {
      $("#modaltitle").text("Confirmed");
      $("#modalbody").text(tenant.name + " has been notified of your arrival. She will meet with you shortly.");
      $("#modal").modal();
      success.play();
    },
    error: function(xhr, status, error) {
      $("#modaltitle").text("Error");
      $("#modalbody").text("Please try again. If this message persists, take a seat and wait patiently.");
      $("#modal").modal();
    }
  });
}
