global.__basedir = __dirname;
require('dotenv').config();
const app = require('express')();
require('./config/express')(app);
app.listen(3000, console.log('Listening on port 3000! Now its up to you...'));
