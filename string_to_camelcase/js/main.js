function toCamelCase(str){
  return str.split(/[_,-]+/)
            .map((e,i) => i === 0? e : e[0].toUpperCase()+e.substring(1))
            .join('');
}

let a = "the_stealth_warrior"

document.getElementById("demo").innerHTML = toCamelCase(a);