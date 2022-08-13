lastDigit = function(as){
  console.log(as)
  
  if(as[0] === undefined) return 1;
  if(as[1] === undefined) return as[0]%10;

  return as.reduceRight(function(acc, val) {
    console.log(`${val}^${acc}`)
    let reduct = (acc === 0 ? 1 : acc > 4 ? ((val % 100) ** (acc % 4 + 4)) : ((val % 1000) ** acc));
    console.log(`${reduct}`)
    return reduct;
  }, 1) % 10;
  
}

document.getElementById("demo").innerHTML = lastDigit([]);