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

    it('should return "IV" if input == 4',()=>{
        expect(romanNumeral(4)).toEqual("IV");
    });

    it('should return "V" if input == 5',()=>{
        expect(romanNumeral(5)).toEqual("V");
    });

    it('should return "IX" if input == 9',()=>{
        expect(romanNumeral(9)).toEqual("IX");
    });
})