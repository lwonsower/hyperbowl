///////////////    NODE MODULES    ///////////////
                   require('dotenv').config();
const express    = require('express');
const app        = express();
const http       = require('http').Server(app);
const path       = require('path');
const bodyParser = require('body-parser');
const config     = require('./server/config.json');

let port         = process.env.PORT || config.port;

// MOUNT middleware
app.use(express.static(path.join(__dirname, '/build/client')));
app.use(bodyParser.json());

//////////////    STATIC ROUTES    //////////////
app.get('/', (req, res) => res.redirect('/index.html'));


// START server
http.listen(port, () => console.log('Serving at ', port));

