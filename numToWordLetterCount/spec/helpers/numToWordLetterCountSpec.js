describe('Convert an integer into an English written word and return its letter count',()=>{
    const numToWordLetterCount = require('../../lib/numToWordLetterCount');

    //Error Handling
    it('should throw error if input is not a number',()=>{
        expect(()=>{
            numToWordLetterCount('pancakes');
        }).toThrow(new Error("Input must be a number"))
    });

    it('should throw error if input < 0',()=>{
        expect(()=>{
            numToWordLetterCount(-1);
        }).toThrow(new Error("Input must be 0 or greater"));
    });

    //Test Cases
    it('should return 4 if input == 5',()=>{
        expect(numToWordLetterCount(5)).toEqual(4);
    });

    it('should return 3 if input == 6',()=>{
        expect(numToWordLetterCount(6)).toEqual(3);
    });
});