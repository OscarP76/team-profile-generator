const engineer = require('../classes/engineer')


test('testing if we can assign a github page', () => {
    const getGithub = 'gitUser'
    const person = new engineer(2, 'john', 'john@john.com', getGithub);
    expect(person.github).toBe(getGithub);
})

test('testing the getGitHub function', () => {
    const gitHub = 'johns github'
    const person = new engineer(2, 'John', 'john@john.com', gitHub);
    expect(person.getGithub()).toBe(gitHub);
})

test('testing the getRole function', () => {
    const role = 'engineer'
    const person = new engineer(6, 'john', 'j@j.com', 'johnsgithub');
    expect(person.getRole()).toBe(role);
})