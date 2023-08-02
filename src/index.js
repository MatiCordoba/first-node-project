const express = require('express');
const path = require('node:path');

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000)
console.log('Server is listening on port', 3000)