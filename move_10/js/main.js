function moveTen(s){
  const alpha =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let newArray = [];
  for (const i in s.split('')){
    newArray.push(alpha[(alpha.indexOf(s[i])+10)%26]);
  }
  return newArray.join('');
}

document.getElementById("demo").innerHTML = moveTen('testcase');