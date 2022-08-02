function isReduced(arr){
  let r = true;
  arr.forEach((e,i) => {
    if(arr[i] && arr[i+1] && arr[i].length === arr[i+1].length && !(arr[i] === arr[i+1])){
      r = false;
    }
  });
  return r;
}

function plsReduce(arr){
  arr.forEach((e,i) => {
    if(arr[i] && arr[i+1] && arr[i].length === arr[i+1].length && !(arr[i] === arr[i+1])){
      arr.splice(i,2);
      return;
    }
  });
}

function dirReduc(arr){
  while (! isReduced(arr)){
    plsReduce(arr);
  }
  return arr;
}

let a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]

document.getElementById("demo").innerHTML = dirReduc(a);