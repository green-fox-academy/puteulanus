
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const LISTEN_PORT = 8080;

app.use(express.static('assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    if (!req.query.input) {
        res.json({"error": "Please provide an input!"});
        return;
    }
    res.json({
        received: req.query.input,
        result: req.query.input * 2
    })

});

app.get('/greeter', (req, res) => {
    let {name, title} = req.query;
    if (!name && !title) {
        res.json({"error": "Please provide a name and a title!"});
    } else if (!name) {
        res.json({"error": "Please provide a name!"});
    } else if (!title) {
        res.json({"error": "Please provide a title!"});
    } else {
        res.json({"welcome_message": `Oh, hi there ${name}, my dear ${title}!`})
    }
});

app.get('/appenda/:appendable', (req, res) => {
    res.json({"appended": req.params.appendable + 'a'});
});

app.get('/appenda/', (req, res) => {
    res.status(404).end();
});

app.post('/dountil/:action', (req, res) => {
    let until = req.body.until;
    if (!until) {
        res.status(404).send({"error": "Please provide a number!"});
    }
    let operation;
    switch (req.params.action) {
        case 'sum':
            operation = (num1, num2) => num1 + num2;
            break;
        case 'factor':
            operation = (num1, num2) => num1 * num2;
            break;
        default:
            res.status(404).end();
            return;
    }
    let tmp_num = until;
    let result_num = until;
    while(--until) {
        result_num = operation(until, result_num);
    }
    res.json({"result": result_num});

});

app.post('/arrays', (req, res) => {
    let {what, numbers} = req.body;
    if (!what || !numbers) {
        res.status(404).json({"error": "Please provide what to do with the numbers!"});
    }

    switch (what) {
        case 'sum':
            res.json({"result": numbers.reduce((num1, num2) => num1 + num2)});
            break;
        case 'multiply':
            res.json({"result": numbers.reduce((num1, num2) => num1 * num2)});
            break;
        case 'double':
            res.json({"result": numbers.map(num => num * 2)});
            break;
        default:
            res.status(404).end();
    }
});

app.listen(LISTEN_PORT, () => {
    console.log('Server start');
});