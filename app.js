const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');
const port = process.env.PORT || 4000;
const accessKey = 'pbJpHBZeaChyHyydssok';

const app = express();
app.use(cors());

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the proxy-codewars API!'
  }));

app.get('/users/:idOrUsername', (req, res) => {
    fetch(`https://www.codewars.com/api/v1/users/${req.params.idOrUsername}?access_key=${accessKey}`)
        .then(response => response.json())
        .then(response => res.send(response));
});

app.listen(port, () => console.log(`Listening on port ${port}`));