describe('Translate a number into a day of the week',()=>{
    const numToWeekday = require('../../lib/numToWeekday');

    //Error Handling
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
    
    //Days
    it('should return "Sunday" if input == 1',()=>{
        expect(numToWeekday(1)).toEqual("Sunday");
    });

    it('should return "Monday" if input == 2',()=>{
        expect(numToWeekday(2)).toEqual("Monday");
    });

    it('should return "Tuesday" if input == 3',()=>{
        expect(numToWeekday(3)).toEqual("Tuesday");
    });

    it('should return "Wednesday" if input == 4',()=>{
        expect(numToWeekday(4)).toEqual("Wednesday");
    });

    it('should return "Thursday" if input == 5',()=>{
        expect(numToWeekday(5)).toEqual("Thursday");
    });

    it('should return "Friday" if input == 6',()=>{
        expect(numToWeekday(6)).toEqual("Friday");
    });

    it('should return "Saturday" if input == 7',()=>{
        expect(numToWeekday(7)).toEqual("Saturday");
    });
});