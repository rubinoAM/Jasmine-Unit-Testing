function romanNumeral(num){
    function charCount(str,letter){
        var letCount = 0;
        for(let i =0; i<str.length; i++){
            if(str.charAt(i) == letter){
                letCount++;
            }
        }
        return letCount;
    }


    const charArray = ['I','V','X','L','C','D','M'];
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
        // for(let i=0; i<num; i++){
        //     romanNum += charArray[0].repeat(num);
        //     if(charCount(romanNum,"I") > 3){

        //     }
        //     return romanNum;
        // }
    }
}

    /* if(num < 4){
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
    } else if (num == 23){
        romanNum = charArray[2].repeat(2) + charArray[0].repeat(3);
        return romanNum; 
    } */
    /*else {
        return num;
    }*/

module.exports = romanNumeral;