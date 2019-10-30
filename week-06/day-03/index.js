
const http = require('http');
const url = require('url');

let movies = [{
    id: '1',
    name: 'miao miao',
    genre: 'meow'
}];

const app = http.createServer((req, res) => {

    const urlData = url.parse(req.url);
    urlData.paths = urlData.pathname.split('/').slice(1);

    // get movies
    if (req.method === 'GET' && urlData.pathname === '/movies'){
        res.write(JSON.stringify(movies));
        res.end();
        return;
    }

    // get movie by id
    if (req.method === 'GET' && urlData.pathname.startsWith('/movies') && urlData.paths.length === 2){
        let movieId = urlData.paths[1];
        let result = movies.filter(({id}) => id === movieId );
        if (result.length === 0) {
            res.statusCode = 404;
            res.write(JSON.stringify({error: 'Movie not found'}));
        } else {
            res.write(JSON.stringify(result));
        }
        res.end();
        return;
    }

    // delete movie by id
    if (req.method === 'DELETE' && urlData.pathname.startsWith('/movies') && urlData.paths.length === 2) {
        if (req.headers.authorization !== 'top-secret') {
            res.statusCode = 403;
            res.write(JSON.stringify({error: 'Authorization failed'}));
            res.end();
            return;
        }

        let movieId = urlData.paths[1];
        let result = movies.filter(({id}) => id !== movieId );
        if (result.length === movies.length) {
            res.statusCode = 404;
            res.write(JSON.stringify({error: 'Movie not found'}));
        } else {
            movies = result;
            res.statusCode = 204;
        }
        res.end();
    }

    // add movie
    if (req.method === 'POST' && urlData.pathname === ('/movies')) {
        if (req.headers.authorization !== 'top-secret') {
            res.statusCode = 403;
            res.write(JSON.stringify({error: 'Authorization failed'}));
            res.end();
            return;
        }
        req.on('data', (data) => {
            let movie = JSON.parse(data.toString());
            if (!movie.title) {
                res.statusCode = 400;
                res.end();
                return;
            }
            if (movies.filter(({title}) => title === movie.title).length > 0) {
                res.statusCode = 409;
                res.end();
                return;
            }
            if (!movie.genre) {
                movie.genre = 'unknown';
            }
            movie.id = Math.random().toString(36).substr(2);
            movies.push(movie);
            res.statusCode = 201;
            res.end();
            return;
        });
    }

    // change movie
    if (req.method === 'PUT' && urlData.pathname.startsWith('/movies') && urlData.paths.length === 2) {
        if (req.headers.authorization !== 'top-secret') {
            res.statusCode = 403;
            res.write(JSON.stringify({error: 'Authorization failed'}));
            res.end();
            return;
        }

        let movieId = urlData.paths[1];
        req.on('data', (data) => {
            let movie = JSON.parse(data.toString());
            if (!movie.title) {
                res.statusCode = 400;
                res.end();
                return;
            }
            if (movies.filter(({id}) => id === movie.id).length === 0) {
                res.statusCode = 404;
                res.end();
                return;
            }
            // todo
        });
    }

});

app.listen(3000, () => {
   console.log('server start');
});