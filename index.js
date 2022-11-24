const express = require("express"),
app = express(),
port = process.env.PORT || 8000,
bodyParser = require('body-parser')

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", function (req, res) {
    res.render('index' , { Name: 'User' , Reg: true})
});

app.post("/", function (req, res) {
    res.render('index' , {Name: req.body.name, Reg: false})
});

app.listen(port, function () {
  console.log("Server is running on port 8000 ");
});