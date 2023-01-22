//jshint esversion:6

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>');
});

app.get('/contact', (req, res) => {
    res.send('Contact me at: frank@weborama.nl');
});

app.get('/about', (req, res) => {
    res.send('About me: Mijn naam is frank, ik heb honger. Ik doe een online bootcamp voor 2020 web development.');
});

app.get('/hobbies', (req, res) => {
    res.send('<ul><li>Peppa</li><li>Pig</li><li>hype</li></ul>');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});