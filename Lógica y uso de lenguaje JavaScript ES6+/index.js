const calculator = string => {
    if (string.length > 20) {
        throw new Error('Max 20 chars');
    }
    string = resolve_multiplies_divides(string);
    string = resolve_sum_subs(string);
    return Number(string);
};

const resolve_sum_subs = string => {
    const match = /[+-]/.exec(string);
    if (match) {
        let temp_result = 0;
        const symbol = match[0];
        const indexA = _getIndex(string, match.index, true);
        const indexB = _getIndex(string, match.index);
        const a = string.substring(indexA, match.index);
        const b = string.substring(match.index + 1, indexB + 1);
        switch (symbol) {
            case '+':
                temp_result = sum(a, b);
                break;
            case '-':
                temp_result = subtract(a, b);
                if (temp_result < 0) {
                    string = string + temp_result;
                    temp_result = 0;
                }
                break;
        }
        return resolve_sum_subs(string.replace(string.substring(indexA, indexB + 1), temp_result));
    } else {
        return string;
    }
};

const resolve_multiplies_divides = string => {
    const match = /[*\/]/.exec(string);
    if (match) {
        let temp_result = 0;
        const symbol = match[0];
        const indexA = _getIndex(string, match.index, true);
        const indexB = _getIndex(string, match.index);
        const a = string.substring(indexA, match.index);
        const b = string.substring(match.index + 1, indexB + 1);
        switch (symbol) {
            case '/':
                temp_result = divide(a, b);
                break;
            case '*':
                temp_result = multiply(a, b);
                break;
        }
        return resolve_multiplies_divides(string.replace(string.substring(indexA, indexB + 1), temp_result));
    } else {
        return string;
    }
};

const sum = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Not numbers');
    }
    return Number(a) + Number(b);
};
const subtract = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Not numbers');
    }
    return Number(a) - Number(b);
};
const multiply = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Not numbers');
    }
    return Number(a) * Number(b);
};
const divide = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Not numbers');
    }
    return Number(a) / Number(b);
};

const _getIndex = (string, symbol_index, reverse = false) => {
    if (reverse) {
        string = string.split('').reverse().join('');
        symbol_index = string.length - 1 - symbol_index;
    }
    const temp_string = string.substring(symbol_index + 1);
    const match = /[*\/+-]/.exec(temp_string);
    return match ? (reverse ? string.length - symbol_index - match.index - 1 : symbol_index + match.index) : (reverse ? 0 : string.length - 1);
};

module.exports = {
    calculator,
    resolve_sum_subs,
    resolve_multiplies_divides,
    sum,
    subtract,
    divide,
    multiply,
    _getIndex
};
