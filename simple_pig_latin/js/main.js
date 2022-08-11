function pigIt(str){
  let words = str.split(' ');
  words.map((word,i) => {
    if (!word.match(/^[.,:!?]/)) {
      words[i] = word.slice(1) + word[0] + 'ay';
    }
  });
  return words.join(' ');
}

document.getElementById("demo").innerHTML = pigIt('Pig latin is cool');