function app() {
  var data = document.getElementById("sampleInput").value.split(" ");

  var sum = 0;
  data.map(function(pair, index) {
    switch (index) {
      case 0:
      case 1:
      case 2:
        sum += pair * 2;
        break;
      case 3:
        sum += pair * 2 * 0.75;
        break;
      case 4:
        sum += pair * 2 * 0.5;
        break;
    }
  });

  document.getElementById("solution").innerHTML = sum;
}
