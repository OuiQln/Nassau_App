const express = require ('express');
const path = require ('path');
const parser = require ('body-parser');
const router = require ('./router.js');

const port = 4000;
const app = express ();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use (express.static(path.join(__dirname, '../client/dist/')));

app.use('/api/ouiqln/items', router);

app.listen (port, ()=> console.log(`connected to port: ${port}!`));