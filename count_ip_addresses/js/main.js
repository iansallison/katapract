function ipsBetween(start, end){
  function num(x) { return x.split('.')
                      .map((e,i)=>e*(256**(3-i)))
                      .reduce((acc,val)=>acc+=val);
  }
  return num(end) - num(start);
}

document.getElementById("demo").innerHTML = ipsBetween("150.0.0.0", "150.0.0.1");