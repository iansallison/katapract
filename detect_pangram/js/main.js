function isPangram(string){
  const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const test = string.toLowerCase().split('');
  return alpha.every(l => test.find(e => l === e));
}

let string = "The quick brown fox jumps over the lazy dog.";

document.getElementById("demo").innerHTML = isPangram(string);