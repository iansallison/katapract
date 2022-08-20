var uniqueInOrder=function(iterable){
  if (typeof iterable === "string"){iterable = iterable.split('')};
  return iterable.filter((x,i) => x != iterable[i-1]);
}

document.getElementById("demo").innerHTML = uniqueInOrder('AAAABBBCCDAABBB');