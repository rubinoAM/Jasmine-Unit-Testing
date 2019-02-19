function numToWordLetterCount(num){
    //Variables
    let numToWord = '';
    const singleDigitInts = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    const firstDoubleDigitInts = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tensInts = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    //Error Handling
    if(typeof(num) !== "number"){
        throw Error("Input must be a number");
    }
    if(num < 0){
        throw Error("Input must be 0 or greater");
    }

    //Conversion Process
    if(num < 10){
        numToWord = singleDigitInts[num];
    } 
    else if (num >= 10 && num < 20){
        numToWord = firstDoubleDigitInts[num - 10];
    } 
    else if (num >= 20 && num < 100){
        let numOnes = num % 10;
        let numTens = num - numOnes;
        numTens = Math.floor(num / 10);
        numToWord = tensInts[numTens - 2] + "-" +singleDigitInts[numOnes];
    }
    else if (num >= 100 && num < 1000){
        //CODE
    }

    return numToWord.length;
}

module.exports = numToWordLetterCount;