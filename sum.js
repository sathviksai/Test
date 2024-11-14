async function sum(shouldThrow = false) {
    if (shouldThrow) {
        throw new Error('error');
    }
    return "peanut butter";
}

module.exports = sum;