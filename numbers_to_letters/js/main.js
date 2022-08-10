function switcher(x){
 const alpha = '-zyxwvutsrqponmlkjihgfedcba!? ';
 return x.map(e => alpha[Number(e)]).join('');
}

const test = ['24', '12', '23', '22', '4', '26', '9', '8'];

document.getElementById("demo").innerHTML = switcher(test);