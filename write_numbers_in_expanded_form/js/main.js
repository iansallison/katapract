function expandedForm(num) {
  const arr = num.toString().split('')
  let str = '';
  arr.map((e,i) => {
    if(e != 0){
      str += ` + ${e*(10**(arr.length-i-1))}`;
    }
  })
  return str.slice(3);
}
