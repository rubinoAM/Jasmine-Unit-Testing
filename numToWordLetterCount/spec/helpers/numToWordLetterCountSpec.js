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

    it('should return 6 if input == 12',()=>{
        expect(numToWordLetterCount(12)).toEqual(6);
    });

    it('should return 12 if input == 23',()=>{
        expect(numToWordLetterCount(23)).toEqual(12);
    });

    it('should return 23 if input == 342',()=>{
        expect(numToWordLetterCount(342)).toEqual(23);
    });

    it('should return 20 if input == 115',()=>{
        expect(numToWordLetterCount(115)).toEqual(20);
    });

    it('should return 24 if input == 999',()=>{
        expect(numToWordLetterCount(999)).toEqual(24);
    });

    it('should return 11 if input == 1000',()=>{
        expect(numToWordLetterCount(1000)).toEqual(11);
    });
});