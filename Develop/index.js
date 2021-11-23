const generateHtml = require('./generateHtml')
const inquirer = require('inquirer')
const Intern = require('./classes/intern')
const Engineer = require('./classes/engineer')
const Manager = require('./classes/manager')
const Choices = require('inquirer/lib/objects/choices')
const fs = require('fs')

var team = []

// console.log('Making html from other file', generateHtml(team))

function init() {
    console.log('starting application');
    newManager()
}

init()

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
        var manager = new Manager(answers.id, answers.firstName, answers.email, answers.officeNumber)
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
        var intern = new Intern(answers.id, answers.firstName, answers.email, answers.school)
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
        var engineer = new Engineer(answers.id, answers.firstName, answers.email, answers.github)
        team.push(engineer)
        console.log('new class we just made!', engineer)
        generateEmployee()
    })
}

function generateEmployee() {
    inquirer.prompt([
        {
            name: 'employee',
            type: 'list',
            message: 'What position would you like to add',
            choices: ['intern', 'engineer', 'none']
        },
    ]).then((response) => {
        if (response.employee === 'intern') {
            newIntern()
        } else {
            if (response.employee === 'engineer') {
                newEngineer()
            } else {
                if (response.employee === 'manager') {
                    newManager()
                }  else {
                    console.log(team)
                    fs.writeFileSync('index.html', generateHtml(team))
                }
            }
        }
        
    })
}

function addAnother() {
    inquirer.prompt([
        {
            name: 'addAnother',
            type: 'confirm',
            message: 'Would you like to add more employees?!'
        },
    ]).then(function(answer) {
        if (answer.addAnother === true) {
            generateEmployee()
        } else {
            console.log('time to start html!')
        }
    })
}

function repeatQuestions() {
    inquirer.prompt([
        {
            name: 'employee',
            type: 'choice',
            message: 'What position would you like to add',
            Choices: ['intern', 'engineer', 'manager', 'none']
        },
    ]).then((response) => {
        if (response.generateEmployee === repeatQuestions) {
            repeatQuestions()
        }
    })
    
}

// 3. Make the html with the answers from those questions

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        err ? console.error(`we had an error: ${err}`) : console.log('Success!!');
    });
    
}
