global.__basedir = __dirname;
require('dotenv').config();

const app = require('express')();
const cors = require('cors');
const dbConnection = require('./config/dbConfig')

const apiRouter = require('./routes/index')


//const { errorHandler } = require('./untils/errHandler');

require('./config/express')(app);

app.use('/api', apiRouter);
app.use(cors('/api'))
//app.use(errorHandler);

dbConnection()
    .then(() => console.log('DB Connected successfully!'))
    .catch(err => console.log('DB error:', err))

app.listen(3000, console.log('Listening on port 3000! Now its up to you...'));


