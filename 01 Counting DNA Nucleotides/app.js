function app() {
  var data = document.getElementById("sampleInput").value.split("");
  var A = 0,
    C = 0,
    G = 0,
    T = 0;
  data.map(function(letter) {
    if (letter === "A") {
      A += 1;
    }
    if (letter === "C") {
      C += 1;
    }
    if (letter === "G") {
      G += 1;
    }
    if (letter === "T") {
      T += 1;
    }
  });
  document.getElementById("solution").innerHTML =
    A + " " + C + " " + G + " " + T;
}
