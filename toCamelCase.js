let pipos = 'the-stealth-warrior';
toCamelCase(pipos);

function toCamelCase(pipo){
    palabras=pipo.split(/[-_]/);
    result=palabras[0]
    for (let index = 1; index < palabras.length; index++) {
        word=palabras[index].charAt(0).toUpperCase() + palabras[index].slice(1);
        result+=word;
    }
    return result;

