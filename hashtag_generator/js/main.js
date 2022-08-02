function generateHashtag (str) {
  let hash = '#'+ str.replace(/\b\w/g, (c) => c.toUpperCase()).replace(/ /g, '')
  return (hash.length === 1 || hash.length > 140) ? false : hash;
}

document.getElementById("demo").innerHTML = generateHashtag ("Codewars");