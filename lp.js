function checkpalindrome(str) {
  var arr = str.split("").reverse();
  reverse = arr.join("");
  if (str == reverse) return true;
  else return false;
}

function checkp(str) {
  var l = 0;
  var hash = {};
  var len = str.length;
  for (var i = 0; i < len; i++) {
    for (var k = len - 1; k > 0; k--) {
      if (str[i] != str[k]) continue;
      else {
        st = str.slice(i, k + 1);
        if (checkpalindrome(st)) {
          console.log("setting", str);
          var length = st.length;
          if (length > l) {
            console.log(length);
            l = length;
            var h = {};
            h[st] = length;
          }
        }
      }
    }
  }
  return JSON.stringify(h);
}
checkp("amalayalama")