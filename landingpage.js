function showall(){
    var x = document.getElementById("show-button");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("show-button-div");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

function showless(){
    var x = document.getElementById("show-button");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var y = document.getElementById("show-button-div");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
}