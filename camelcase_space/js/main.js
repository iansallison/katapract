function isLowerCase(string) {
  return string === string.toLowerCase() && !(string === string.toUpperCase());
}

function isUpperCase(string) {
  return string === string.toUpperCase() && !(string === string.toLowerCase());
}

function isCamel(str1, str2){
  if(str1 && str2){
    return (isLowerCase(str1) && isUpperCase(str2))
  }
  return false
}

function solution(string) {
    let arr = string.split('');
    arr.forEach((e,i) => {
      if(isCamel(arr[i],arr[i+1])){
        arr[i] = arr[i] + ' ';
      }
    })
    arr = arr.join('');
    return arr;
}

let a = "camelCasingTest"

document.getElementById("demo").innerHTML = solution(a);
//document.getElementById("demo").innerHTML = isUpperCase("A");
//document.getElementById("demo").innerHTML = isLowerCase("a");
//document.getElementById("demo").innerHTML = isCamel("a","A");