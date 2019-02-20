describe('Determine if the parentheses, brackets and braces in a string are balanced',()=>{
    const balancedParentheses = require('../../lib/balancedParentheses');

    it('should throw error if string does not contain parentheses, brackets, or strings',()=>{
        expect(()=>{
            balancedParentheses('flapjacks');
        }).toThrow(new Error('There are no parentheses, brackets or braces in this string.'));
    });
});