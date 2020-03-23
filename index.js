function add(x,y) {
    return x+y;
}

function subtract(x,y) {
    return x-y;
}

function divide(x,y) {
    return x/y;
}

function multiply(x,y) {
    return x*y;
}

//describe function
const describe = (fn) => {
    fn();
}

//it function
const it = (msge, fn) => {
    console.log("Test Case:", msge)
    describe(fn);
}

//matchers function
const matchers = (exp) => ({
    toBe: (assertion) => {
        if(exp === assertion) {
            console.log('pass');
            return true;
        }
        else {
            console.log('fail');
            return false;
        }
    }
})

//expect function
const expect = (value) => matchers(value);

//addition test
describe( () => {
    it('Adds two numbers', () => {
        let result = add(10,20);
        expect(result).toBe(30);
    })
});

//subtraction test
describe( () => {
    it('Subtracts two numbers', () => {
        let result = subtract(10,20);
        expect(result).toBe(30);
    })
});

//division test
describe( () => {
    it('Divides two number', () => {
        let result = divide(10,20);
        expect(result).toBe(0.5);
    })
});

//multiplication test
describe( () => {
    it('Multiplies two number', () => {
        let result = multiply(10,20);
        expect(result).toBe(200);
    })
});
