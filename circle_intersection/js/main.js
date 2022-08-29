// circleIntersection=(a,b,r)=>{
  // basic concept, works!
  // console.log(`a is ${a}\nb is ${b}\nr is ${r}`);
  // const d = Math.sqrt((a[0]-b[0])**2+(a[1]-b[1])**2);
  // console.log(`distance is ${d}`);
  // const x = 2*(r**2)*Math.acos(d/(2*r));
  // const y = d*Math.sqrt(r**2-(d/2)**2);
  // console.log(`x is ${x}\ny is ${y}`);
  // console.log(`Answer is ${x-y}\n`)
  // return d > 2*r ? 0 : Math.floor(x - y);
// }

// circleIntersection=(a,b,r)=>{
  //above idea consolidated, too long!
  // const d = Math.sqrt((a[0]-b[0])**2+(a[1]-b[1])**2);
  // return d > 2*r ? 0 : Math.floor(2*(r**2)*Math.acos(d/(2*r)) - d*Math.sqrt(r**2-(d/2)**2));

// }

// consolidated, added with(Math), used Math.hypot, still too long!
// with(Math)circleIntersection=([a,b],[x,y],r)=>{
//   const d = hypot(a-x,b-y);
//   return d > 2*r ? 0 : floor(2*(r**2)*acos(d/(2*r)) - d*sqrt(r**2-(d/2)**2));
// }

//looking up new techniques, best I can do, still 107/94 chars!
// with(Math)circleIntersection=([a,b],[x,y],r)=>floor(2*(r*r*acos((d=hypot(a-x,b-y)/2)/r)-d*sqrt(r*r-d*d)))|0

// 90/94
with(Math)circleIntersection=([a,b],[x,y],r)=>(-sin(d=2*acos(hypot(a-x,b-y)/2/r))+d)*r*r|0