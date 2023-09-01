function hasCommonFactor(x, y) {
    if (x === 0 || y === 0) {
        return false;
    }

    while (y !== 0) {
        var temp = y;
        y = x % y;
        x = temp;
    }

    return (x > 1) ? true : false;
}

module.exports = hasCommonFactor