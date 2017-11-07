const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'));

app.get("/", function(req, res){
    //res.send(__dirname)
    res.sendFile(path.join(__dirname + "index.html"));
    //res.send('home page');
})

app.listen(PORT, function(){
    console.log("personal page running");
});