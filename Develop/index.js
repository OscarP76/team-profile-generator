const generateHtml = require('./generateHtml')
const inquirer = require('inquirer')
const intern = require('./classes/intern')
const engineer = require('./classes/engineer')
const manager = require('./classes/manager')
const Choices = require('inquirer/lib/objects/choices')

var team = []

function init() {
    console.log('starting application');
    inquirer.prompt(newManager()).then((answers) => {
        generateEmployee(answers);
        writeToFile('', generateHtml(this.employee, answers))
    })
    
}

init()
// ask all these questions with enquirer

// 1. Make your classes

// 2. Ask all my questions
// ask the manager question 1st
// then ask what employee type do u want. intern or engineer
// looping on continuous until they say we are done adding ppl
// make new classes with the answers from inquirer

function newManager() {
    inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is your first name?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is your id?'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is your office number?'
        }
    ]).then(function (answers) {
        console.log('answer', answers)
        var manager = new manager(answers.id, answers.firtsName, answers.email, answers.officeNumber)
        team.push(manager)
        console.log('new class we just made!', manager)
        generateEmployee()
    })
}

function newIntern() {
    inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is your first name?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is your id?'
        },
        {
            name: 'school',
            type: 'input',
            message: 'What is your school?'
        }
    ]).then(function (answers) {
        console.log('answer', answers)
        var intern = new intern(answers.id, answers.firtsName, answers.email, answers.school)
        team.push(intern)
        console.log('new class we just made!', intern)
        generateEmployee()
    })
}

function newEngineer() {
    inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is your first name?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is your id?'
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is your github page?'
        }
    ]).then(function (answers) {
        console.log('answer', answers)
        var engineer = new engineer(answers.id, answers.firtsName, answers.email, answers.github)
        team.push(engineer)
        console.log('new class we just made!', engineer)
        generateEmployee()
    })
}

function generateEmployee() {
    inquirer.prompt([
        {
            name: 'employee',
            type: 'choice',
            message: 'What position would you like to add',
            Choices: ['intern', 'engineer', 'manager', 'none']
        },
    ]).then((response) => {
        if (response.employee === intern) {
            newIntern()
        } else {
            if (response.employee === engineer) {
                newEngineer()
            } else {
                if (response.employee === manager) {
                    newManager()
                }
            }
        }
        
    })
}

// 3. Make the html with the answers from those questions

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        err ? console.error(`we had an error: ${err}`) : console.log('Success!!');
    });
    
}
