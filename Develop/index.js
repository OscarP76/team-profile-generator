const generateHtml = require('./generateHtml')  
const inquirer = require('inquirer')
const Intern = require('./classes/intern')

var team = [{name: 'Dave'}, {name: 'Mike'}]


// console.log('Making html from other file', generateHtml(team))

// 1. Make your classes

// 2. Ask all my questions
    // ask the manager question 1st
    // then ask what employee type do u want. intern or engineer
    // looping on continuous until they say we are done adding ppl
    // make new classes with the answers from inquirer


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
        var intern = new Intern(answers.id, answers.firtsName, answers.email, answers.school)
        console.log('new class we just made!', intern)
        
    })



    
// 3. Make the html with the answers from those questions

// ask all these questions with enquirer
