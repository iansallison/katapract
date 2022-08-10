function halveNRev(s){
  let midLetter = '';
  if (s.length % 2 !== 0){
    midLetter = s[((s.length-1)/2)];
  }
  const s1 = s.slice(0,(Math.floor(s.length/2)));
  const s2 = s.slice(Math.ceil((s.length/2)));
  return s1.split('').reverse().join('')+midLetter+s2.split('').reverse().join('');
}

function insideOut(x){
  const words = x.split(' ');
  let sArray = [];
  for(const word in words){
    sArray.push(halveNRev(words[word]));
  }
  return sArray.join(' ');
}

document.getElementById("demo").innerHTML = insideOut('candy');