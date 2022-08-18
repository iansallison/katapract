function openOrSenior(data){
  return data.map(e => (e[0] >= 55 && e[1] >7)? 'Senior':'Open');
}

document.getElementById("demo").innerHTML = openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);