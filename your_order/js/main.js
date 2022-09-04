function order(words){
  return words.split(' ').sort((a,b)=> a.replace(/[a-z]/ig, '') - b.replace(/[a-z]/ig, '')).join(' ');
}