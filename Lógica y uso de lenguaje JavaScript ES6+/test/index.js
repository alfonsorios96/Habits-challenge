const assert = require('chai').assert;
const {calculator, sum, subtract, divide, multiply, _getIndex, resolve_sum_subs, resolve_multiplies_divides} = require('../index');

suite('calculator function', () => {
    test('Case default', () => {
        assert.strictEqual(calculator('4-7+8+9/2*3'), 18.5);
    });

    test('Case negative first value', () => {
        assert.strictEqual(calculator('-4-7+8+9/2*3'), 10.5);
    });

    test('Case multi divisions and multiplies', () => {
        assert.strictEqual(calculator('-4/7*8+9/2*3'), 8.928571428571429);
    });

    test('Case max 20 chars exception', () => {
        assert.throws(() => {
            calculator('2+4*5*9*0/10+2+5-3-23')
        }, Error);
    });
});

suite('sum function', () => {
    test('Case strings', () => {
        assert.strictEqual(sum('5', '10'), 15);
    });
    test('Case numbers', () => {
        assert.strictEqual(sum(15, 10), 25);
    });
    test('Case not numbers exception', () => {
        assert.throws(() => {
            sum('s', '2')
        }, Error);
        assert.throws(() => {
            sum('5', 'b')
        }, Error);
    });
});

suite('subtract function', () => {
    test('Case default', () => {
        assert.strictEqual(subtract(15, 10), 5);
    });
    test('Case strings', () => {
        assert.strictEqual(subtract('15', '10'), 5);
    });
    test('Case not numbers exception', () => {
        assert.throws(() => {
            subtract('s', '2')
        }, Error);
        assert.throws(() => {
            subtract('5', 'b')
        }, Error);
    });
});

suite('multiply function', () => {
    test('Case default', () => {
        assert.strictEqual(multiply(5, 10), 50);
    });
    test('Case strings', () => {
        assert.strictEqual(multiply('15', '10'), 150);
    });
    test('Case not numbers exception', () => {
        assert.throws(() => {
            multiply('s', '2')
        }, Error);
        assert.throws(() => {
            multiply('5', 'b')
        }, Error);
    });
});

suite('divide function', () => {
    test('Case default', () => {
        assert.strictEqual(divide(5, 10), 0.5);
    });
    test('Case strings', () => {
        assert.strictEqual(divide('15', '10'), 1.5);
    });
    test('Case not numbers exception', () => {
        assert.throws(() => {
            divide('s', '2')
        }, Error);
        assert.throws(() => {
            divide('5', 'b')
        }, Error);
    });
});

suite('_getIndex function', () => {
    test('Case default', () => {
        assert.strictEqual(_getIndex('7+5', 1), 2);
    });
    test('Case reverse', () => {
        assert.strictEqual(_getIndex('7+5', 1, true), 0);
    });
    test('Case multi numbers', () => {
        assert.strictEqual(_getIndex('72-15', 2), 4);
    });
    test('Case float numbers', () => {
        assert.strictEqual(_getIndex('2.3*1.2', 3), 6);
    });
});

suite('resolve_sum_subs function', () => {
    test('Case sum operations', () => {
        assert.strictEqual(resolve_sum_subs('7+5+1+2+3+4+58'), '80');
    });
    test('Case subs operations', () => {
        assert.strictEqual(resolve_sum_subs('7-5-1-2-3-4+58'), '50');
    });
});

suite('resolve_multiplies_divides function', () => {
    test('Case multiply operations', () => {
        assert.strictEqual(resolve_multiplies_divides('7*5*1*2*3*4'), '840');
    });
    test('Case divides operations', () => {
        assert.strictEqual(resolve_multiplies_divides('75/5/5/3'), '1');
    });
});
