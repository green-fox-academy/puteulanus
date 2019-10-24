
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render('home',{
  user: req.query.name ? req.query.name : 'Guest'
  });
})

app.listen(3000, () => {
  console.log('Miao');
})