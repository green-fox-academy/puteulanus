const express = require('express');
const mysql = require('mysql');
const path = require('path');

// set env in local
if (!process.env.JAWSDB_URL) {
    require('dotenv').config();
}

// connect to database
const conn = mysql.createConnection(process.env.JAWSDB_URL);
conn.connect(err => {
    if (err) throw err;
    console.log('connected to database');
});

// init
const app = express();
app.use(express.json());
app.use(express.static('public_html'));
app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'index.html'));
});
app.all('*', (req, res, next) => {
    res.header({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    next();
});

// endpoint
app.get('/posts', (req, res) => {
    conn.query('SELECT postId AS id, postTitle AS title, poster AS poster, postUrl AS url, postTime AS timestamp, vote AS score FROM posts',
        (err, rows) => {
            if (err) throw err;
            res.json({posts: rows});
        });
});


app.post('/posts', (req, res) => {
    let {title, url, poster} = req.body;
    if (!title || !url) {
        res.status(400).end();
    }
    poster = poster ? poster : 'anonymous';
    conn.query('INSERT INTO posts (postTitle, postUrl, poster, postTime, vote) VALUES (?,?,?,?,?);',
        [title, url, poster, Date.now(), 0],
        (err, rows) => {
            if (err) {
                res.status(400).end();
                console.log(err);
                return;
            }
            conn.query('SELECT * from posts where postId=LAST_INSERT_ID();', (err,rows) => {
                res.status(201).json(rows);
            })

        })
});

app.put('/posts/:id/upvote', (req, res) => {
    conn.query('UPDATE posts SET vote = vote + 1 WHERE postId = ?', [req.params.id], (err, rows) => {
        if (err) {
            res.status(400).end();
            console.log(err);
            return;
        }
        conn.query('SELECT * FROM posts WHERE postId = ?', [req.params.id], (err, rows) => {
            res.json(rows);
        });
    })
});

app.put('/posts/:id/downvote', (req, res) => {
    conn.query('UPDATE posts SET vote = vote - 1 WHERE postId = ?', [req.params.id], (err, rows) => {
        if (err) {
            res.status(400).end();
            console.log(err);
            return;
        }
        conn.query('SELECT * FROM posts WHERE postId = ?', [req.params.id], (err, rows) => {
            res.json(rows);
        });
    })
});

// run
app.listen(process.env.PORT, () => {
    console.log('server start at ' + process.env.PORT)
});