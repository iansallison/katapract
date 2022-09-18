function encrypt(text, n) {
  for(let i = 0; i < n; i++){
    text = text.split('').filter((_,e) => e%2).join('') + text.split('').filter((_,e) => (e+1)%2).join('');
  }
  return text;
}

function decrypt(encryptedText, n) {
  for(let i = 0; i < n; i++){
    const decryptedText = encryptedText.slice((encryptedText.length/2)).split('').map((e,i) => e = e + encryptedText.charAt(i)).join('');
    encryptedText = decryptedText.length > encryptedText.length? decryptedText.slice(0,-1) : decryptedText;
  }
  return encryptedText;
}