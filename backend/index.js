const express = require('express');
const formRoutes = require('./routes/form')
const countryRoutes = require('./routes/country')
const cityRoutes = require('./routes/city')
const stateRoutes = require('./routes/state')
require( './config/database' );
const app = express();
const port = 5000;

const bodyParser = require("body-parser")
// const PORT = process.env.PORT || 3000

// const app = express();
const cors = require( 'cors' ),
    // Allow Origins according to your need.
    corsOptions = {
        'origin': '*'
    };

app.use( cors( corsOptions ) );
// app.use('view engine','ejs')
// // app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(session({
//     secret: 'something',
//     resave: true,
//     saveUninitialized: true
// }));


app.use('/api/country', countryRoutes );
app.use('/api/form', formRoutes );
app.use('/api/city', cityRoutes );
app.use('/api/state', stateRoutes );



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});