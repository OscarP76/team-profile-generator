# team-profile-generator
File for my homework project
## Languages used
Node.js, HTML, Javascript
## Summary 
Developed and tested a team profile generator using the command line. made an accompanying video showing functionality.
## Code Snippet
```
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
        
        var manager = new Manager(answers.id, answers.firstName, answers.email, answers.officeNumber)
        team.push(manager)
        console.log('new class we just made!', manager)
        generateEmployee()
    })
}
```
## My Links
<a href=" https://youtu.be/ScZMn_DhCvU">DemoVideo</a>
[Github](https://github.com/OscarP76/team-profile-generator)
