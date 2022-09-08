function pickPeaks(arr){
  let ans = {pos:[],peaks:[]};

  function checkPlat(x,y){
    if (arr[x] > arr[y]){
      ans.peaks.push(arr[x]);
      ans.pos.push(y+1);
      return; 
    } else if (arr[x] === arr[y]){
      return checkPlat(x,y-1)
    } else  return;
  };

  for (let i = 1; i < arr.length-1; i++){
    if (arr[i] > arr[i+1]){
      checkPlat(i,i-1);
    }
  };
  
  return ans;
}