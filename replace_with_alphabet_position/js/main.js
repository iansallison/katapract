var countBits = function(n) {
  let bin = n.toString(2).split('');
  let bits = bin.filter(e => e=='1');
  return bits.length;
};

document.getElementById("demo").innerHTML = countBits(10);