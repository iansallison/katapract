function firstNonRepeatingLetter(s) {
  let l= s.toLowerCase();
  for(let i = 0; i < s.length; i++){
    if(!l.replace(l[i],'').includes(l[i])){
      return s[i];
    }
  }
  return '';
}

document.getElementById("demo").innerHTML = firstNonRepeatingLetter('sttrress');