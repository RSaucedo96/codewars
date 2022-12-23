/*The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.*/

function count (string) {
    let letterCount={};
    [...string].forEach(function (letter) {
        if (Object.keys(letterCount).includes(letter)){
            letterCount[letter]+=1;
        }
        else {
            letterCount[letter]=1;
        }
    })
    return letterCount;
}