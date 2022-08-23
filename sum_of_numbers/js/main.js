function getSum( a,b )
{
   if (a === b) return a;
   const arr = [a,b].sort((a,b) => a - b);
   let sum = 0;
   for (let i = arr[0]; i <= arr[1]; i++){
    sum += i;
   }
   return sum;
}

document.getElementById("demo").innerHTML = getSum(2,1);