function positiveSum(arr) {
  return arr.reduce((acc,val)=>{return val > 0? acc + val : acc},0)
}