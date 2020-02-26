function app() {
  var data = document.getElementById("sampleInput").value * 1;

  var n1 = 1,
    n2 = 1;
  for (var i = 3; i <= data; i++) {
    var temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }

  document.getElementById("solution").innerHTML = n2;
}
