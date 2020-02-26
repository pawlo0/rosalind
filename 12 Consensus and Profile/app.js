function app() {
  var data = document.getElementById("sampleInput").value.split(">");
  var strings = [];
  data.map(function(sample) {
    if (sample.substr(0, 9) == "Rosalind_") {
      var tempSample = sample.replace(/\s/g, "").split(/[0-9]+/g)[1];
      var tempArr = tempSample.split("");
      strings.push(tempArr);
    }
  });

  var result = { consensus: "", A: "A: ", C: "C: ", G: "G: ", T: "T: " };

  for (var n = 0; n < strings[0].length; n++) {
    var count = { A: 0, C: 0, G: 0, T: 0 };
    for (var m = 0; m < strings.length; m++) {
      var letter = strings[m][n];
      count[letter] += 1;
    }
    var max = 0;
    for (base in count) {
      if (count[base] > max) {
        var letterForConsensus = base;
        max = count[base];
      }
      result[base] += count[base] + " ";
    }
    result.consensus += letterForConsensus;
  }

  document.getElementById("solution").innerHTML =
    result.consensus +
    "\n" +
    result.A +
    "\n" +
    result.C +
    "\n" +
    result.G +
    "\n" +
    result.T;
}
