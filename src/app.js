require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');

const flash = require('connect-flash');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs');

const passport = require('passport');
const cookieParser = require('cookie-parser');
const { apiRoute, viewsRoute } = require('./routes');
const { localAuth } = require('./middlewares/auth');
const { notFound, errorHandler } = require('./middlewares/error');

/**
 * App setup
 */
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    name: '_sess',
    saveUninitialized: true,
    resave: true,
  })
);

/**
 * Ejs setup
 */
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Auth setup
 */
app.set('trust proxy', 1);
app.use(cookieParser(process.env.COOKIE_SECRET));
passport.use(localAuth);

/**
 * Main routes
 */
app.use(flash());
// Ejs route
app.use(viewsRoute);
// Documentation route
app.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));
// API route
app.use('/api/v1', apiRoute);

// Middleware to handle errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;
