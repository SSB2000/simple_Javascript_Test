const removeFromArray = function( [a, b, c, d], del) {
    let arr = [a, b, c, d];
    let i = arr.indexOf(del);
    let arra = arr.splice(i,1);
    return arra;
}

module.exports = removeFromArray
