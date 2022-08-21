function bouncingBall(h,  bounce,  window) {
  if( (h <= 0) || (bounce >= 1 || bounce <= 0) || (window >= h) ){return -1};
  let count = 0;
  while(h > window){
    //drop down
    count++;
    h *= bounce;
    //bounce up
    h > window? count++ : count;
  }
  return count;
}

document.getElementById("demo").innerHTML = bouncingBall(3.0, 0.66, 1.5);