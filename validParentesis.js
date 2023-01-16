/*
Description:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/
function validParentheses(parens) {
    if (parens.length === 1 || parens.length % 2 !== 0 || parens[0] === ')' || parens[-1] === '(') {
        return false;
    } else if (parens === '') {
        return true;
    } else {
        for (let i = 0; i < parens.length; i++) {
            if (parens[i] === '(') {
                if (!parens.includes(')')) {
                    return false;
                } else {
                    for (let k = 0; k < parens.slice(i); k++) {
                        if (parens[k] === ')') {
                            if (!parens.includes('(')) {
                                return false;
                            } else {
                                parens=parens.splice(k+1, 1);
                                parens=parens.splice(i, 1);
                                i = 0;
                                k = 0;
                            }

                        }
                    }
                    console.log(parens);
                }
            }
        }
        return true;
    }
}
validParentheses('()()((()')