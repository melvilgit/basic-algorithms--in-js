function findnum(n) {
  n = String(n);
  for (var k = n.length - 1; k > 0; k--) {
    if (n[k] < n[k - 1]) {
      continue;
    } else {
      var num = n[k - 1];
      var copy = n.slice(0).split("");
      var subarray = copy.splice(k - 1);
      var no = findexact(subarray, num);
      console.log("swapping", n[no], n[k - 1]);
      n = n.split("");
      var temp = n[no];
      n[no] = n[k - 1];
      n[k - 1] = temp;
      return n.join("");
    }
  }
  return "already in max form"
}

function findexact(arr, num) {
  arr.sort();
  min = arr[0];
  for (var i in arr) {
    if (arr[i] > num) {
      min = arr[i];
      return i;
    }
  }
}