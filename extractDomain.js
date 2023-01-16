/*
Write a function that when given a URL as a string,
parses out just the domain name and returns it as a string. For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url){
    let domain='';
    if (url.includes('www.')){
        domain=url.slice(url.indexOf('.')+1);
        domain=domain.slice(0,domain.indexOf('.'));
    }
    else if(url.includes('http')||url.includes('https')){
        domain=url.slice((url.indexOf('/')+2),url.indexOf('.'));
    }
    else{
        domain=url.slice(0,url.indexOf('.'));
    }
    return domain;
}