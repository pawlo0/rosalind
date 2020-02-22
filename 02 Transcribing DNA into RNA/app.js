function app() {
  var data = document.getElementById("sampleInput").value.split("");
  var result = "";
  data.map(function(letter) {
    if (letter === "T") {
      result += "U";
    } else {
      result += letter;
    }
  });
  document.getElementById("solution").innerHTML = result;
}
