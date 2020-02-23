function app() {
  var data = document.getElementById("sampleInput").value.split(" ");
  var larger = data[0];
  var smaller = data[1];
  var finalStr = "";

  for (var i = 0; i < larger.length; i++) {
    var control = true;
    for (var n = 0; n < smaller.length; n++) {
      if (larger[i + n] != smaller[n]) {
        control = false;
      }
    }
    if (control) {
      finalStr += i + 1 + " ";
    }
  }

  document.getElementById("solution").innerHTML = finalStr;
}
