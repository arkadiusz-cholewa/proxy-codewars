var express = require('express');
var fetch = require("node-fetch");
var cors = require('cors');
var port = process.env.PORT || 3000;
var app = express();
var accessKey = 'pbJpHBZeaChyHyydssok';

var app = express();
app.use(cors());

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the proxy-codewars API!'
}));

app.get('/users/:idOrUsername', (req, res) => {
    fetch(`https://www.codewars.com/api/v1/users/${req.params.idOrUsername}?access_key=${accessKey}`)
        .then(response => response.json())
        .then(response => res.send(response));
});

app.listen(port, function () {
    console.log(`Example app listening on port !`);
});