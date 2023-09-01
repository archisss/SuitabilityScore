const hasCommonFactor = require('../src/hasCommonFactor')

test('two numbers have a common factor greater than 1', () => {
    expect(hasCommonFactor(12, 18)).toBe(true);
    expect(hasCommonFactor(20, 30)).toBe(true);
});

test('two numbers do not have a common factor greater than 1', () => {
    expect(hasCommonFactor(7, 11)).toBe(false);
    expect(hasCommonFactor(13, 17)).toBe(false);
    expect(hasCommonFactor(3, 8)).toBe(false);
});

test('one or both numbers are 0', () => {
    expect(hasCommonFactor(0, 5)).toBe(false);
    expect(hasCommonFactor(0, 0)).toBe(false);
    expect(hasCommonFactor(8, 0)).toBe(false);
});