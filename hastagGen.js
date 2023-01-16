/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!
Here's the deal:
    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.
*/
function generateHashtag (str) {
    if (!str.replace(/\s/g, '').length) {
        return false;
    }
    else{
        let palabras=str.split(/[ ]/);
        let result=`#`
        let word='';
        for (let index = 0; index < palabras.length; index++) {
            word=palabras[index].charAt(0).toUpperCase() + palabras[index].slice(1);
            result+=word;
        }
        if (result.length>140){return false}
        else{return result}

    }
}