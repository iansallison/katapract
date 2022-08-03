// function add(n){
//   return function(x){return n+x}
// }

function add(n){
  let total = n;
  
  function addMore(x) {
    total += x;
    return addMore;
  }
  
  addMore.toString = function() {
    return total;
  };
  
  return addMore;
}

document.getElementById("demo").innerHTML = add(1)(2)(3);