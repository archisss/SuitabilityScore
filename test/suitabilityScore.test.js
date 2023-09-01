const suitabilityScore = require('../src/suitabilityScore');

test('calculate suitabilityScore correctly for even street length', () => {
    const street = 15;
    const driverName = 'John Doe';

    const score = suitabilityScore(street, driverName);

    expect(score).toBe(5);
});

test('calculate suitabilityScore correctly for odd street length', () => {
    const street = 7;
    const driverName = 'Alice';

    const score = suitabilityScore(street, driverName);

    expect(score).toBe(2);
});

test('increase suitabilityScore when common factors exist', () => {
    const street = 15;
    const driverName = 'Jane Smith';

    const score = suitabilityScore(street, driverName);

    // Regular suitabilityScore =7 but Common factors exist, so suitabilityScore increased by 50%
    expect(score).toBe(10.5);
});

test('return 0 suitabilityScore for invalid inputs', () => {
    const street = 0;
    const driverName = '';

    const score = suitabilityScore(street, driverName);

    expect(score).toBe(0);
});

