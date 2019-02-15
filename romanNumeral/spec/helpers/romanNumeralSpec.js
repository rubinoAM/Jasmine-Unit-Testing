describe('Convert an Arabic numeral into a Roman numeral',()=>{
    const romanNumeral = require('../../lib/romanNumeral');

    //Error Handling
    it('should throw error if input is not a number',()=>{
        expect(()=>{
            romanNumeral('waffles');
        }).toThrow(new Error("Input must be a number"))
    });

    it('should throw error if input <= 0',()=>{
        expect(()=>{
            romanNumeral(0);
        }).toThrow(new Error("Input must be 1 or greater"));
    })

    //Test Cases
    it('should return "I" if input == 1',()=>{
        expect(romanNumeral(1)).toEqual("I");
    });
})