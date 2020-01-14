const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
//const mainRouter = require('./routes/mainRoutes');
const profileRouter = require('./routes/profileRoutes');
const loyaViewRouter = require('./routes/loyaViewRoutes');

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  console.log('using morgan for logging!');
  app.use(morgan('dev'));
}

app.use(express.json());

// STATIC FILES
//app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES MOUNTING
app.use('/api/v1/users', userRouter);
app.use('/api/v1/profiles', profileRouter);
app.use('/profile', loyaViewRouter);
//app.use('/', mainRouter);

module.exports = app;
