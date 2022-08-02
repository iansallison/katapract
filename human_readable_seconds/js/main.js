function humanReadable (seconds) {
  let sec = seconds % 60; 
  let min = ((seconds - sec) / 60)%60;
  let hrs = (seconds - sec - (min*60))/3600;
  return `${String(hrs).padStart(2,'00')}:${String(min).padStart(2,'00')}:${String(sec).padStart(2,'00')}`;
}

document.getElementById("demo").innerHTML = humanReadable (0);