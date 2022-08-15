function getMiddle(s)
{
  return s.length % 2 === 0 ? s.substring(((s.length)/2)-1,((s.length)/2)+1) : s[(s.length-1)/2] ;
}

document.getElementById("demo").innerHTML = getMiddle("testing");