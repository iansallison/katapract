function longest(s1, s2) {
    let s3 = s1 + s2;
    let s3array = s3.split('');
    let s3sort = s3array.sort();
    var s3set = [...new Set(s3sort)];
    let setstring = s3set.join('');
    return setstring;
  }

let a ="aretheyhere";
let b ="yestheyarehere";

document.getElementById("demo").innerHTML = longest(a,b);