function generateHtml(team) {
    var cards = []

    for (let i = 0; i < team.length; i++) {
        var card = `
        <h1> My name is! ${team[i].name} </h1>
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
    </head>
    <body>
        ${cards}
    </body>
    </html>
    `
    
    return mainHtml
}