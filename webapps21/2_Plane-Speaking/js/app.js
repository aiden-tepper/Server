var e = document.getElementById("planes-list");

for(var value in xPlanes) {
  e.innerHTML += "<div><h2>" + value + "</h2>";
  e.innerHTML += "<p>" + xPlanes[value] + "</p>";
  e.innerHTML += "<img src='img/" + value +
                  ".jpg' style='width:50%;height:50%;'>";
  e.innerHTML += "<br></br></div>"
}
