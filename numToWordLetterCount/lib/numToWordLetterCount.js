function numToWordLetterCount(num){
    //Variables
    let numToWord = '';
    const singleDigitInts = ['zero','one','two','three','four','five','six','seven','eight','nine'];

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

    return numToWord.length;
}

module.exports = numToWordLetterCount;