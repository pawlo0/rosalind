function app() {
  var data = document.getElementById("sampleInput").value.split(" ");
  var result = 0;
  for (i = 1; i <= data[0]; i++) {
    result += data[1] * 1;
  }
  document.getElementById("solution").innerHTML = result;
}
