function inArray(array1,array2){
  let r = [];
  array1.forEach(e1 => array2.forEach(e2 => (e2.includes(e1)? r.push(e1) : false)));
  return [... new Set(r)].sort();
}