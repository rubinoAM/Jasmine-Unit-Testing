function numToWeekday(num){
    //Error Handling
    if(typeof(num) !== "number"){
        throw Error("Input must be a number");
    }

    if(num > 7){
        throw Error("Input must be between 1 and 7");
    } else if(num <= 0){
        throw Error("Input must be between 1 and 7");
    }

    //Return Days
    if(num == 1){return "Sunday";}
    else if(num == 2){return "Monday";}
    else if(num == 3){return "Tuesday";}
    else if(num == 4){return "Wednesday";}
    else if(num == 5){return "Thursday";}
    else if(num == 6){return "Friday";}
    else if(num == 7){return "Saturday";}
}

module.exports = numToWeekday;