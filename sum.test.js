const sum = require('./sum');

test('data equal to peanut butter', async () => {
    const data = await sum();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await sum(true);
    } catch (error) {
        expect(error.message).toMatch('error');
    }
});