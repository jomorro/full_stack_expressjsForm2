const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []

// add POST request listener here
app.post('/api/user/', function(request, response) {
    if (users.map(userObject => userObject.username).some(username => username == request.body.username)) {
        response.status(409).send({error: 'username already in use'});
    } else {
        const user = request.body;
        user.id = Math.floor(Math.random() * 1000000000);
        users.push(user);
        response.status(201).send(user);
    }
});

app.listen(3000);