function numToWeekday(num){
    if(typeof(num) !== "number"){
        throw Error("Input must be a number");
    }

    if(num > 7){
        throw Error("Input must be between 1 and 7");
    }
    else{
        return num;
    }
}

module.exports = numToWeekday;