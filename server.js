const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/about.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/blog.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/contact.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/portfolio.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/services.html'));
});

app.get('/single', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/single.html'));
});

app.get('/single-portfolio', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/single-portfolio.html'));
});

app.post('/contact', (req, res) => {
    console.log("post route is working");
    let data = req.body.form;
    console.log(data);
    res.sendFile(path.join(__dirname + '/views/contact.html'));

});

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';
app.listen(PORT, () => { console.log(`Server is running at https://${HOST}:${PORT}`) });