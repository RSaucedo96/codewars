
const pepo=[1,2,3,4,5]; 
const pipo=[1,2];

console.log(arrayDiff(pepo, pipo))

function arrayDiff(a, b) {
    let result=a.filter(number => !(number in b));
    return result
}