function findEvenIndex(arr)
{
  if(arr.length === 0) return 0;
  for(let i = 1; i <= arr.length; i++){
    if(arr.slice(0,i-1).reduce((a,b) => a+b,0) === arr.slice(i).reduce((a,b) => a+b, 0)) return i-1;
  }
  return -1;
}