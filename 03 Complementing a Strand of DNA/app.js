function app() {
  var data = document.getElementById("sampleInput").value.split("");
  var result = "";
  data.map(function(letter) {
    if (letter === "A") {
      result = "T" + result;
    }
    if (letter === "T") {
      result = "A" + result;
    }
    if (letter === "C") {
      result = "G" + result;
    }
    if (letter === "G") {
      result = "C" + result;
    }
  });
  document.getElementById("solution").innerHTML = result;
}
