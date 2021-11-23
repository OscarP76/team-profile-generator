const manager = require('../classes/manager')

test('whether or not we can instantiate a manager', () => {
    const testing = new manager();
    expect(typeof(testing)).toBe('object');
})

test('testing the getOfficeNumber function', () => {
    const getOfficeNumber = '2062'
    const person = new manager(9, 'Ted', 't@t.com', getOfficeNumber);
    expect(person.getOfficeNumber()).toBe(getOfficeNumber);
})