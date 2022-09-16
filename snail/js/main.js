snail = function(array) {
  let ans = [];
  let arr = array;
  function spiralArm(arr){
    //check to make sure there is an array to spiral
    if(arr.length < 2){
      ans = ans.concat(arr.pop());
      return ans;
    };
    //add the first row left to right
    ans = ans.concat(... arr.splice(0,1));
    //add the last segment top to bottom
    for(let i = 0; i < arr.length; i++){
      ans = ans.concat(arr[i].pop());
    }
    //add the bottom segment right to left
    ans = ans.concat(arr.pop().reverse());
    //add the first segment bottom to top
    for(let i = arr.length-1; i >= 0; i--){
      ans = ans.concat(arr[i].shift());
    }
    return arr.length === 0? ans : spiralArm(arr);
  }
  return spiralArm(array)
}