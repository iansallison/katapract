function solution(str, ending){
  return (ending === '')? true : (str.slice(-(ending.length))===ending);
}

//document.getElementById("demo").innerHTML = solution('abcde', '');
document.getElementById("demo").innerHTML = 'abcde'.slice(0);