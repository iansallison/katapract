function duplicateEncode(word){
  word = word.toLowerCase();
  return word.split('')
              .map(e => word.indexOf(e) === word.lastIndexOf(e)? '(':')')
              .join('');
}