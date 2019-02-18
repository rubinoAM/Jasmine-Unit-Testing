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

    it('should return "VIII" if input == 8',()=>{
        expect(romanNumeral(8)).toEqual("VIII");
    });

    it('should return "IX" if input == 9',()=>{
        expect(romanNumeral(9)).toEqual("IX");
    });

    it('should return "XXIII" if input == 23',()=>{
        expect(romanNumeral(23)).toEqual("XXIII");
    }); 
    
    it('should return "LXXIII" if input == 73',()=>{
        expect(romanNumeral(73)).toEqual("LXXIII");
    }); 
    
    it('should return "CXII" if input == 112',()=>{
        expect(romanNumeral(112)).toEqual("CXII");
    }); 
    
    /* it('should return "MIX" if input == 1009',()=>{
        expect(romanNumeral(1009)).toEqual("MIX");
    }); */
})