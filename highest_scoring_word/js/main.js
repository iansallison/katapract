function high(x){
  const alpha = `abcdefghijklmnopqrstuvwxyz`;
  function scoring(word){
    return word.split('').reduce((acc,val,i,a) => acc + (alpha.indexOf(val)+1),0);
  }
  return x.toLowerCase().split(' ').sort((a,b) => scoring(b) - scoring(a))[0];
}