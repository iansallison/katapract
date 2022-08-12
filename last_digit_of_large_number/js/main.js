lastDigit = function(str1, str2){

  if(Number(str2) === 0) return 1;

  const arr = [
    [0,0,0,0],
    [1,1,1,1],
    [6,2,4,8],
    [1,3,9,7],
    [6,4,6,4],
    [5,5,5,5],
    [6,6,6,6],
    [1,7,9,3],
    [6,8,4,2],
    [1,9,1,9]
  ]

  return arr[Number(str1.slice(-1))][Number(str2.slice(-2))%4]
}

document.getElementById("demo").innerHTML = lastDigit("4", "1");