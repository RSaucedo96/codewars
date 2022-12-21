function narcissistic(value) {
    let test= 0;
    let str=value.toString();
    let exp=str.length;
    numbers=str.split('').map(iNum => parseInt(iNum, 10));
    for (let index = 0; index < numbers.length; index++) {
        test+=Math.pow(numbers[index],exp);
    }
    if(test===value){
        return true
    }
    else return(false)
  }