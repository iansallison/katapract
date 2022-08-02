String.prototype.toJadenCase = function () {
  let arr = this.split('');
  arr[0] = arr[0].toUpperCase();
  arr.forEach((e,i) => {
    if(arr[i-1]===' '){
      arr[i] = e.toUpperCase();
    }
  })
  arr = arr.join('');
  return arr;
};

let a = "how can mirrors be real if our eyes aren't real"

document.getElementById("demo").innerHTML = a.toJadenCase();