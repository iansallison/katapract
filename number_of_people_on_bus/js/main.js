var number = function(busStops){
  return busStops.reduce((acc, val) => acc + val[0] - val[1], 0);
}

document.getElementById("demo").innerHTML = number([[10,0],[3,5],[5,8]]);