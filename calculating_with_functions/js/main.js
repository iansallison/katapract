function zero(func) {
  return func ? func(0) : 0
}
function one(func) {
  return func ? func(1) : 1
}
function two(func) {
  return func ? func(2) : 2
}
function three(func) {
  return func ? func(3) : 3 
}
function four(func) {
  return func ? func(4) : 4 
}
function five(func) {
  return func ? func(5) : 5
}
function six(func) {
  return func ? func(6) : 6 
}
function seven(func) {
  return func ? func(7) : 7  
}
function eight(func) {
  return func ? func(8) : 8 
}
function nine(func) {
  return func ? func(9) : 9 
}

function plus(y) {
  return function(x){return x+y}
}
function minus(y) {
  return function(x){return x-y}
}
function times(y) {
  return function(x){return x*y}
}
function dividedBy(y) {
  return function(x){return x/y}
}

document.getElementById("demo").innerHTML = seven(times(five()));