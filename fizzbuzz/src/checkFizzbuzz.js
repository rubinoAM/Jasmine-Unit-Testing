const checkFizzbuzz = (input) => {
    if(input % 3 == 0){
        return 'fizz';
    } else if(input % 5 == 0){
        return 'buzz';
    } else {
        return input.toString();
    }
};