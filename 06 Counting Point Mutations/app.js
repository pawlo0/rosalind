function app() {
  var data = document.getElementById("sampleInput").value.split(" ");
  var total = 0;
  if (!data[1]) {
    data.push(data[0].substr(data[0].length / 2));
    data[0] = data[0].substr(0, data[0].length / 2);
  }
  for (var i = 0; i < data[0].length; i++) {
    if (data[0][i] != data[1][i]) {
      total += 1;
    }
  }

  document.getElementById("solution").innerHTML = total;
}
