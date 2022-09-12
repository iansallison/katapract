function sortArray(array) {
  let sorted = array.filter(a => a%2).sort((a,b)=>a-b);
  return array.map((e)=> e%2? sorted.shift() : e);
}