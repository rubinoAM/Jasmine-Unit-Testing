it('should return "1" for 1',()=>{
    expect(checkFizzbuzz(1)).toEqual('1');
});

it('should return "2" for 2',()=>{
    expect(checkFizzbuzz(2)).toEqual('2');
});

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