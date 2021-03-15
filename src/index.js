module.exports = function reverse(n){
    if (n < 0)
    n = - n
    let res = n.toString().split("").reverse().join("");
    return res;
  }
