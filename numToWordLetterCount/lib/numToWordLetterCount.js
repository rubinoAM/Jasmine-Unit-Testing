function numToWordLetterCount(num){
    //Variables
    let numToWord = '';

    //Error Handling
    if(typeof(num) !== "number"){
        throw Error("Input must be a number");
    }
    if(num <= 0){
        throw Error("Input must be 0 or greater");
    }

    //return numToWord;
}

module.exports = numToWordLetterCount;