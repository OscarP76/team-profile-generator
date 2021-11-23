

function generateHtml(team) {

    var cards = []

    for (let i = 0; i < team.length; i++) {
        var newField = ''
        console.log(team[i])
        if (team[i].getRole() === 'Manager') {
            newField = 'officeNumber: ' + team[i].officeNumber
        } else if (team[i].getRole() === 'Engineer') {
            newField = 'github: ' + team[i].github
        } else {
            newField = 'school: ' + team[i].school
        }
        var card = `
        <div class="col">
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${team[i].name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${team[i].getRole()}</h6>
    <p class="card-text">ID:${team[i].id}</p>
    <p class="card-text">Email:${team[i].email}</p>
    <p class="card-text">${newField}</p>
    </div>
  </div>
</div>
        `
        cards.push(card)

    }

    var mainHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid text-center">
  <div class="container">
    <h1 class="display-4">My Team</h1>
  </div>
</div>
<div class="container">
    <div class="row">
        ${cards}
    </div>
</div>
    </body>
    </html>
    `

    return mainHtml
}

module.exports = generateHtml