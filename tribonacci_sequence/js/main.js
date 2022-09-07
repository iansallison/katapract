function tribonacci(signature,n){
  let ans = signature.slice(0,n <= 3? n : 3);
  for(let i = 0; i < n - 3; i++){
    ans = ans.concat(ans[i]+ans[i+1]+ans[i+2]);
  }
  return ans;
}