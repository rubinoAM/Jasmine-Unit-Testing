/* Write a program to determine if the the parentheses (),
the brackets [], and the braces {}, in a string are balanced.

For example:

{{)(}} is not balanced because ) comes before (

({)} is not balanced because ) is not balanced between {}
     and similarly the { is not balanced between ()

[({})] is balanced

{}([]) is balanced

{()}[[{}]] is balanced */

function balancedParentheses(str){
    let leftPar = str.includes('(');
    let rightPar = str.includes(')');
    let leftBrack = str.includes('[');
    let rightBrack = str.includes(']');
    let leftBrace = str.includes('{');
    let rightBrace = str.includes('}');

    if((leftPar && rightPar) || (leftBrack && rightBrack) || (leftBrace && rightBrace)){
        return "SUCCESS";
    } else {
        throw Error("There are no parentheses, brackets or braces in this string.");
    }
}

module.exports = balancedParentheses;