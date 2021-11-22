const intern = require('../classes/intern')

test('whether or not we can instantiate an intern', () => {
    const testing = new intern();
    expect(typeof(testing)).toBe('object');
})

test('testing if we can assign a school', () => {
    const school = 'UW'
    const person = new intern(7, 'eric', 'e@e.com', school);
    expect(person.school).toBe(school);
})

test('testing the getSchool function', () => {
    const getSchool = 'UW'
    const person = new intern(7, 'eric', 'e@e.com', getSchool);
    expect(person.getSchool()).toBe(getSchool);
})


test('testing the getRole function', () => {
    const role = 'intern'
    const person = new intern(6, 'john', 'j@j.com', 'UW');
    expect(person.getRole()).toBe(role);
})