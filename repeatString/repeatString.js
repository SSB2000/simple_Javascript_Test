const repeatString = function(str, n) {
    let string = "";
    let i = 0;
    while(i >= 0 && i < n) {
        string = string + str;
        i++;
    }
    if(n < 0) {
        string = "ERROR";
    }
    return string;
}
module.exports = repeatString
