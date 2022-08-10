function countBy(x, n) {
  let z = [];
  for (let i = x; i <= n*x; i += x) {
    z.push(i);
  };
  return z;
}

//document.getElementById("demo").innerHTML = solution('abcde', '');