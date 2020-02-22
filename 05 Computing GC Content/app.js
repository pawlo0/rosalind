function app() {
  var data = document.getElementById("sampleInput").value.split(">");
  var id = "",
    sequence = "",
    higher = { id: "", cgContent: 0 };
  data.map(function(sample) {
    id = sample.substr(0, 13);
    sequence = sample.substr(13);
    var total = 0,
      cgCount = 0;
    sequence.split("").map(function(letter) {
      if (letter === "C" || letter === "G") {
        cgCount += 1;
      }
      if (/^[A-Z]+$/.test(letter)) {
        total += 1;
      }
    });

    if ((cgCount / total) * 100 > higher.cgContent) {
      higher.id = id;
      higher.cgContent = (cgCount / total) * 100;
    }
  });

  document.getElementById("solution").innerHTML =
    higher.id + "</br>" + Math.round(higher.cgContent * 1000000) / 1000000;
}
