var express = require('express');
var fetch = require("node-fetch");
var cors = require('cors');
var port = process.env.PORT || 3000;
var app = express();
app.use(cors());
app.get('users/:user', function (req, res) {
    fetch(`https://www.codewars.com/api/v1/users/${req.params.user}?access_key=pbJpHBZeaChyHyydssok`)
        .then(response => response.json())
        .then(response => res.send(response));
});
app.listen(port, function () {
    console.log(`Example app listening on port !`);
});