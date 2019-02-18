function countDigits(num){
    let digitCount = 0;
    if(num >= 1){
        digitCount++;
    }
    
    while(num/10 >= 1){
        num = num/10;
        digitCount++;
    }

    return digitCount;
}

function romanNumeral(num){

    //Roman Numeral Characters
    const charArray = ['I','V','X','L','C','D','M'];

    //Mutated Variables
    let romanNum = '';
    let dummyNum = 0;
    
    //Error Handling
    if(typeof(num) !== "number"){
        throw Error("Input must be a number");
    }
    if(num <= 0){
        throw Error("Input must be 1 or greater");
    }

    //Conversion Process
    if(num >= 1 && num <= 9){
        dummyNum = num;
        while(dummyNum > 0){
            if(dummyNum == 9){
                romanNum = charArray[0] + charArray[2];
                dummyNum = 0;
            } else if(dummyNum < 9 && dummyNum >= 5){
                romanNum += charArray[1];
                dummyNum = dummyNum - 5;
                romanNum += charArray[0].repeat(dummyNum);
                dummyNum = 0;
            } else if(dummyNum >= 1 && dummyNum <= 4){
                romanNum += charArray[0].repeat(dummyNum);
                if(romanNum.length == 4){
                    romanNum = charArray[0] + charArray[1];
                }
                dummyNum = 0;
            }
        }
        return romanNum;
    } else {
        dummyNum = num;
        let dummyTens, dummyHundreds, dummyThousands = 0;
        while(dummyNum > 0){
            dummyTens = dummyNum - (dummyNum % 10);
            if(dummyTens >= 1000){
                dummyThousands = Math.floor(dummyTens/1000);
                dummyHundreds = Math.floor(dummyTens/100);
                dummyTens = Math.floor(dummyTens/10);
                romanNum += charArray[7].repeat(dummyThousands);
                romanNum += charArray[5].repeat(dummyHundreds);
                romanNum += charArray[2].repeat(dummyTens);
            } else if(dummyTens < 1000 && dummyTens >= 100){
                dummyHundreds = Math.floor(dummyTens/100);
                dummyTens = Math.floor(dummyTens/10);
                romanNum += charArray[5].repeat(dummyHundreds);
                romanNum += charArray[2].repeat(dummyTens);
            } else if(dummyTens < 100 && dummyTens >= 10){
                dummyTens = Math.floor(dummyTens/10);
                if(dummyTens >= 5){
                    romanNum += charArray[3];
                    dummyTens = dummyTens - 5;
                }
                romanNum += charArray[2].repeat(dummyTens);
            }
            dummyNum = dummyNum % 10;
            if(dummyNum < 10){
                if(dummyNum == 9){
                    romanNum += charArray[0] + charArray[2];
                    dummyNum = 0;
                } else if(dummyNum < 9 && dummyNum >= 5){
                    romanNum += charArray[1];
                    dummyNum = dummyNum - 5;
                    romanNum += charArray[0].repeat(dummyNum);
                    dummyNum = 0;
                } else if(dummyNum >= 1 && dummyNum <= 4){
                    romanNum += charArray[0].repeat(dummyNum);
                    if(romanNum.length == 4){
                        romanNum += charArray[0] + charArray[1];
                    }
                    dummyNum = 0;
                }
            }
        }
        return romanNum;
    }
}

module.exports = romanNumeral;