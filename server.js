require('dotenv').config();

const express = require('express');
const path = require('path');
const expressSanitizer = require('express-sanitizer');
const Info = require('./models/info');

const app = express();

// Mongoose Config
const mongoose = require("mongoose");
const uri = (process.env.DATABASE_URI) || "mongodb://localhost:27017/DevAce";
const connect = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Global Middleware
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded({ extended: true }));
app.use(expressSanitizer());

// Routes
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
    req.body.form.message = req.sanitize(req.body.form.message);
    const data = req.body.form;
    Info.create(data)
        .then((info) => {
            info.save()
                .then((savedData) => {
                    res.sendFile(path.join(__dirname + '/views/contact.html'));
                    console.log('The file is saved to the database successfully.');
                }).catch((err) => { console.error(err); })
        }).catch((err) => { console.error(err); });
});

// Mongoose Connection
connect.then(() => {
    console.log(`Correctly Connected to MongoDB Remote Database !!`);
}).catch((err) => console.log(err));

// Server Connection
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
app.listen(PORT, () => { console.log(`Server is running at https://${HOST}:${PORT}`) });