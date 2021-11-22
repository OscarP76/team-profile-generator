const employee = require('../classes/employee')

test('whether or not we can instantiate an employee', () => {
    const testing = new employee();
    expect(typeof(testing)).toBe('object');
})

test('whether we can give an employee an id', () => {
    const pickles = 5
    const person = new employee(pickles);
    expect(person.id).toBe(pickles);
})

test('Whether we can give an employee a name', () => {
    const name = 'Greg'
    const moniker = new employee(1, name)
    expect(moniker.name).toBe(name)

})

test('Whether or not we can give employee an email address', () => {
    const email = 'slkhdf@test'
    const address = new employee(1, 'dave', email)
    expect(address.email).toBe(email)
})

test('testing the getId function', () => {
    const id = 5
    const person = new employee(id);
    expect(person.getId()).toBe(id);
})

test('testing the getName function', () => {
    const name = 'dave'
    const person = new employee(3, name);
    expect(person.getName()).toBe(name);
})

test('testing the getEmail function', () => {
    const email = 'j@j.com'
    const person = new employee(4, 'Dave', email);
    expect(person.getEmail()).toBe(email);
})

test('testing the getRole function', () => {
    const role = 'employee'
    const person = new employee(6, 'john', 'j@j.com');
    expect(person.getRole()).toBe(role);
})

