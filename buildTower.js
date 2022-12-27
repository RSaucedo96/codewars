/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings,
given a positive integer number of floors.
A tower block is represented with "*" character.
For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ",
  "*****"
]
*/
console.log(towerBuilder(3));
function towerBuilder(nFloors) {
    let tower=[];
    const midPoint = Math.floor((nFloors*2-1)/2);
    for (let floor = 0; floor < nFloors; floor++) {
        let level = '';
        for (let col = 0; col < nFloors*2-1; col++) {
            if( (midPoint - floor <= col) && (midPoint + floor >= col) ) {
                level += '*';
            }
            else {
                level += ' ';
            }
        }
        tower.push(level);
    }
    return tower;
}