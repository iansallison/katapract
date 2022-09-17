var encryptThis = function(text) {
  function encryptWord(word){
    let end = word.slice(1);
    if(end.length > 1){
      end = end[end.length-1]+end.slice(1,-1)+end[0]
    }
  return `${word.charCodeAt(0)}${end}`;
  }
  return text.split(' ').map(w => encryptWord(w)).join(' ');
}