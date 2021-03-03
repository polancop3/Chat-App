let express = require('express');
let bodyParser = require("body-parser")
let app = express();

app.use(express.static(__dirname))
app.use(bodyParser.json())

let messages = [
    {name : "pedro", message : "klk"},
    {name : "goku", message : "kamehameha"}
]

app.get("/messages",(req,res) => {
    res.send(messages)
})

app.post("/messages",(req,res) => {
    console.log(req.body)
    messages.push(req.body)
    res.sendStatus(200)
})

let server = app.listen(3000,() => {
    console.log("server is listening on port " + server.address().port)
})