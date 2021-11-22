const manager = require('../classes/manager')

test('whether or not we can instantiate a manager', () => {
    const testing = new manager();
    expect(typeof(testing)).toBe('object');
})

test('testing the getOfficeNumber function', () => {
    const getOfficeNumber = ''
    const person = new manager(getOfficeNumber);
    expect(person.getOfficeNumber()).toBe(getOfficeNumber);
})