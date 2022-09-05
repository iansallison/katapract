function digPow(n, p){
  const powSum = n.toString().split('').reduce((acc,val,i)=> acc + (Number(val) ** (p+i)),0);
  return powSum % n === 0? powSum/n : -1;
}