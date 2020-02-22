function app() {
  var k = document.getElementById("sampleInput").value;
  var initialArr = [];
  // generate initial array
  for (var i = 1; i <= k; i++) {
    initialArr[i - 1] = i;
  }
  var count = 0,
    finalStr = "";

  heapPermutation(initialArr, initialArr.length, initialArr.length);

  function heapPermutation(a, size, n) {
    // if size becomes 1 then prints the obtained
    // permutation
    if (size == 1) {
      a.map(function(letter) {
        finalStr += letter + " ";
      });
      finalStr += "\n";
      count += 1;
    }
    for (var i = 0; i < size; i++) {
      heapPermutation(a, size - 1, n);

      // if size is odd, swap first and last
      // element
      if (size % 2 == 1) {
        var temp = a[0];
        a[0] = a[size - 1];
        a[size - 1] = temp;
      }
      // If size is even, swap ith and last
      // element
      else {
        var temp = a[i];
        a[i] = a[size - 1];
        a[size - 1] = temp;
      }
    }
  }

  document.getElementById("solution").innerHTML = count + "\n" + finalStr;
}
