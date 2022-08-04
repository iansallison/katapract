function duplicateCount(text){
  let array = text.toLowerCase().split('');
  let dupCounter = 0;
  for (i = 0; i < text.length; i++){
    const e = array.shift();;
    if(array.includes(e)){
      dupCounter++;
      array = array.filter(element => element !== e);
    }
  }
  return dupCounter;
}

document.getElementById("demo").innerHTML = duplicateCount("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz");