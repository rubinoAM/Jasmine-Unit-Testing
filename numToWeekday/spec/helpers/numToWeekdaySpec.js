describe('Translate a number into a day of the week',()=>{
    const numToWeekday = require('../../lib/numToWeekday');

    it('should throw error if input is not a number',()=>{
        expect(()=>{
            numToWeekday('waffles');
        }).toThrow(new Error("Input must be a number"))
    });

    it('should throw error if input > 7',()=>{
        expect(()=>{
            numToWeekday(8);
        }).toThrow(new Error("Input must be between 1 and 7"));
    })

    it('should throw error if input <= 0',()=>{
        expect(()=>{
            numToWeekday(0);
        }).toThrow(new Error("Input must be between 1 and 7"));
    })
});