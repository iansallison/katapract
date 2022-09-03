function alphabetPosition(text) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return text.split('').map(e => alpha.includes(e.toLowerCase())? alpha.indexOf(e.toLowerCase())+1:'').filter(e => e != '').join(' ')
}