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