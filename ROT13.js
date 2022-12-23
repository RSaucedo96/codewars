/*ROT13 is a simple letter substitution cipher that replaces a
letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns
the string ciphered with Rot13.
If there are numbers or special characters
included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted,
like in the original Rot13 "implementation".
*/
function rot13(message){
    const diff = 'z'.charCodeAt(0)-'a'.charCodeAt(0);
    const charA = 'A'.charCodeAt(0);
    const charZ = 'Z'.charCodeAt(0);
    const chara = 'a'.charCodeAt(0);
    const charz = 'z'.charCodeAt(0);
    const charn = 'n'.charCodeAt(0);
    const charN = 'N'.charCodeAt(0);
    let rotMessage = '';
    [...message].forEach(function (letter) {
        let buffer=letter.charCodeAt(0);
        if ((buffer < chara || buffer > charz) && (buffer < charA || buffer > charZ)){
            rotMessage += String.fromCharCode(buffer);
        }
        else if ((buffer >= charn && buffer <= charz) || (buffer >= charN && buffer <= charZ)){
            buffer += 13;
            buffer -= diff+1;
            rotMessage += String.fromCharCode(buffer);
        }
        else{
            buffer += 13;
            rotMessage += String.fromCharCode(buffer);
        }

    })
    return rotMessage;
}