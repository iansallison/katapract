function towerBuilder(nFloors) {
  let tower = [];
  for (let f = 1; f <= nFloors; f++) {
     let floor = '';
     //add stars
     for(let star = 1; star <= (2*f)-1; star++){
        floor += '*';
     }
     //add spaces
     let spaces = ' ';
     spaces = spaces.repeat(nFloors-f);
     floor = spaces+floor+spaces;
     tower.push(floor);
  }
return tower;
}