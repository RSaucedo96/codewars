text="isIsogram";
console.log(isIsogram(text));
function isIsogram(str){
    if (str===""){
        return true;
    }
    let letters=[];
    const word = str.toLowerCase();
    [...word].forEach(letter => {
        if (!(letters.includes(letter))){
            letters.push(letter);
        }
    });
    if (letters.length==word.length){
        return true;
    }
    else {
        return false;
    }
}