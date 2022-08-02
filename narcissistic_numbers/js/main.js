function narcissistic(value) {
  let nums = value.toString().split('');
  let pow = nums.length;
  let narc = nums.reduce((acc, e) => acc + Number(e)**pow,0)
  return narc === value
}

document.getElementById("demo").innerHTML = narcissistic(7);