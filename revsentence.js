function revword(s) {
    var prev = 0;
    rev = "";
    var space = 0;
    var arr = [];
    for (i in s) {
        if (s[i] == " " && space == 0) {
            var str = s.slice(prev, i);
            space = 1;
            arr.push(str);
            arr.push(" ");
        } else if (s[i] == " " && space == 1) {
            arr.push(" ");
        } else {
            if (space == 1) {
                prev = i;
                space = 0;
            }
        }
        if (i == (s.length - 1)) {
            var str = s.slice(prev, i + 1);
            arr.push(str);
        }
    }
    while (arr.length) {
        rev += arr.pop();
    }
    return rev;
}
revword("please reverse             me");
