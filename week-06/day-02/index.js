
const express = require('express');
const path = require('path');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bookinfo',
});

conn.connect((error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log('connect to database success');
});

const LISTEN_PORT = 3000;
const app = express();
app.use(express.static('static'));

app.get('/books/titles', (req, res) => {
    let {category, publisher, plt, pgt} = req.query;

    (async () => {
        let books = await getBooks(conn);
        books = books.map(({title}) => title);
        await res.json((new BooksFilter(books)
            .categoryHas(category)
            .publisherIs(publisher)
            .priceLower(plt)
            .priceGreater(pgt))
            .getBooks())
    })();
});

app.get('/books', (req, res) => {

    let {category, publisher, plt, pgt} = req.query;

    (async () => {
        let books = await getBooks(conn);
        await res.json((new BooksFilter(books)
            .categoryHas(category)
            .publisherIs(publisher)
            .priceLower(plt)
            .priceGreater(pgt))
            .getBooks())
    })();

});

app.listen(LISTEN_PORT, () => {
   console.log(`Server start at ${LISTEN_PORT}`);
});

class BooksFilter {
    constructor(books) {
        this._books = books;
        return this;
    }

    categoryHas(name) {
        if (!name) {return this}
        this._books = this._books.filter(book => book.category.indexOf(name) !== -1);
        return this;
    }

    publisherIs(name) {
        if (!name) {return this}
        this._books = this._books.filter(book => book.publisher === name);
        return this;
    }

    priceLower(price) {
        if (!price) {return this}
        this._books = this._books.filter(book => book.price < price);
        return this;
    }

    priceGreater(price) {
        if (!price) {return this}
        this._books = this._books.filter(book => book.price > price);
    }

    getBooks() {
        return this._books;
    }

}

function getBooks(conn) {
    return new Promise((res, rej) => {
        conn.query(`select book_name as title, aut_name as author, cate_descrip as category, pub_name as publisher, book_price as price
        from author, book_mast, category, publisher
        where book_mast.cate_id=category.cate_id and book_mast.aut_id=author.aut_id and
        book_mast.pub_id=publisher.pub_id`,
            (err, rows) => {
                if (err) {
                    rej(err);
                } else {
                    res(rows);
                }
            });
    });
}