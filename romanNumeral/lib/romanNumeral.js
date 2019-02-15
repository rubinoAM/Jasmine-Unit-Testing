function romanNumeral(num){
    let charArray = ['I','V','X','L','C','D','M'];
    let romanNum = '';
    //Error Handling
    if(typeof(num) !== "number"){
        throw Error("Input must be a number");
    }
    
    if(num <= 0){
        throw Error("Input must be 1 or greater");
    }

    //Conversion Process
    if(num < 4){
        romanNum = charArray[0].repeat(num);
        return romanNum;
    } else if (num == 4){
        romanNum = charArray[0] + charArray[1];
        return romanNum;
    } else if (num == 5){
        romanNum = charArray[1];
        return romanNum;
    } else if (num == 9){
        romanNum = charArray[0] + charArray[2];
        return romanNum;
    }
    /*else {
        return num;
    }*/
}

module.exports = romanNumeral;