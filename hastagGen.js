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