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
            //Default Value for dummyTens
            dummyTens = dummyNum - (dummyNum % 10);

            //1000+
            if(dummyTens >= 1000){
                //Thousands
                dummyThousands = Math.floor(dummyTens/1000);
                romanNum += charArray[6].repeat(dummyThousands);

                //Hundreds
                dummyHundreds = Math.floor(dummyTens/100);
                if(dummyHundreds == 10){
                    dummyHundreds = 0;
                } else if(dummyHundreds == 9){
                    romanNum += charArray[4] + charArray[6];
                    dummyHundreds = 0;
                } else if(dummyHundreds < 9 && dummyHundreds >= 5){
                    romanNum += charArray[5];
                    dummyHundreds -= 5;
                } else if(dummyHundreds == 4){
                    romanNum += charArray[4] + charArray[5];
                    dummyHundreds = 0;
                }
                romanNum += charArray[4].repeat(dummyHundreds);

                //Tens
                dummyTens = Math.floor(dummyTens/100);
                if(dummyTens == 10){
                    dummyTens = 0;
                } else if(dummyTens == 9){
                    romanNum += charArray[2] + charArray[4];
                    dummyTens = 0;
                } else if(dummyTens < 9 && dummyTens >= 5){
                    romanNum += charArray[3];
                    dummyTens -= 5;
                } else if(dummyTens == 4){
                    romanNum += charArray[2] + charArray[3];
                    dummyTens = 0;
                }
                romanNum += charArray[2].repeat(dummyTens);
            } 
            //100 - 999
            else if(dummyTens < 1000 && dummyTens >= 100){
                //Hundreds
                dummyHundreds = Math.floor(dummyTens/100);
                if(dummyHundreds == 9){
                    romanNum += charArray[4] + charArray[6];
                    dummyHundreds = 0;
                } else if(dummyHundreds < 9 && dummyHundreds >= 5){
                    romanNum += charArray[5];
                    dummyHundreds -= 5;
                } else if(dummyHundreds == 4){
                    romanNum += charArray[4] + charArray[5];
                    dummyHundreds = 0;
                }
                romanNum += charArray[4].repeat(dummyHundreds);

                //Tens
                dummyTens = Math.floor(dummyTens/100);
                if(dummyTens == 9){
                    romanNum += charArray[2] + charArray[4];
                    dummyTens = 0;
                } else if(dummyTens < 9 && dummyTens >= 5){
                    romanNum += charArray[3];
                    dummyTens -= 5;
                } else if(dummyTens == 4){
                    romanNum += charArray[2] + charArray[3];
                    dummyTens = 0;
                }
                romanNum += charArray[2].repeat(dummyTens);
            } 
            //10 - 99
            else if(dummyTens < 100 && dummyTens >= 10){
                dummyTens = Math.floor(dummyTens/10);
                if(dummyTens == 9){
                    romanNum += charArray[2] + charArray[4];
                    dummyTens = 0;
                } else if(dummyTens < 9 && dummyTens >= 5){
                    romanNum += charArray[3];
                    dummyTens -= 5;
                } else if(dummyTens == 4){
                    romanNum += charArray[2] + charArray[3];
                    dummyTens = 0;
                }
                romanNum += charArray[2].repeat(dummyTens);
            }
            //Ones
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
                    if(romanNum.length == 4){
                        romanNum += charArray[0] + charArray[1];
                    } else {
                        romanNum += charArray[0].repeat(dummyNum);
                    }
                    dummyNum = 0;
                }
            }
        }
        return romanNum;
    }
}

module.exports = romanNumeral;