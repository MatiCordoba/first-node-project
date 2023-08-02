const express = require('express');
const path = require('node:path');

const indexRoutes = require('./routes/index');

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(indexRoutes);

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)
console.log('Server is listening on port', 3000)