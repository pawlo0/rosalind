function app() {
  var data = document.getElementById("sampleInput").value.split(" ");
  var months = data[0],
    litter = data[1],
    offspring = 1,
    matured = 0;
  for (i = 1; i < months; i++) {
    var newOffspring = matured * litter;
    matured += offspring;
    offspring = newOffspring;
    console.log(
      "month",
      i,
      ", matured:",
      matured,
      ", offspring:",
      offspring,
      ", total:",
      matured + offspring
    );
  }
  document.getElementById("solution").innerHTML = matured + offspring;
}
