function app() {
  var data = document.getElementById("sampleInput").value.split(" ");
  var xx = data[0] * 1;
  var xy = data[1] * 1;
  var yy = data[2] * 1;
  var total = xx + xy + yy;

  var xxxx = ((xx / total) * (xx - 1)) / (total - 1);
  var xxxy = ((xx / total) * xy) / (total - 1);
  var xxyy = ((xx / total) * yy) / (total - 1);

  var xyxx = ((xy / total) * xx) / (total - 1);
  var xyxy = (((xy / total) * (xy - 1)) / (total - 1)) * 0.75;
  var xyyy = (((xy / total) * yy) / (total - 1)) * 0.5;

  var yyxx = ((yy / total) * xx) / (total - 1);
  var yyxy = (((yy / total) * xy) / (total - 1)) * 0.5;

  result = xxxx + xxxy + xxyy + xyxx + xyxy + xyyy + yyxx + yyxy;

  document.getElementById("solution").innerHTML =
    Math.round(result * 100000) / 100000;
}
