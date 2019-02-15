it('should return "fizz" for 3',()=>{
    expect(checkFizzbuzz(3)).toEqual('fizz');
});

it('should return "buzz" for 5',()=>{
    expect(checkFizzbuzz(5)).toEqual('buzz');
});

it('should return "fizzbuzz" for 15',()=>{
    expect(checkFizzbuzz(15)).toEqual('fizzbuzz');
});

it('input should be a number', ()=>{
    expect(()=>{
        checkFizzbuzz('bananas');
    }).toThrow(new Error("Input must be a number"));
});