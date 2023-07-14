const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const { errorHandler } = require('../utils')

module.exports = (app) => {
    app.use(express.json());

    app.use(cookieParser());

    app.use(express.static(path.resolve(__basedir, 'static')));
    //app.use(express.static('src'));

    // app.use(errorHandler(err, req, res, next));
};