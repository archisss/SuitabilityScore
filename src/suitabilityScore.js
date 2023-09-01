const hasCommonFactor = require('./hasCommonFactor');

function suitabilityScore(street, driverName) {
    let vowels = driverName.match(/[aeiouAEIOU]/g)?.length || 0;
    let consonants = driverName.length - vowels;
    let SS = 0;

    SS = (street % 2 === 0) ? vowels * 1.5 : consonants;

    if (hasCommonFactor(street, driverName.length)) {
        SS *= 1.5;
    }

    return SS;
}

module.exports = suitabilityScore