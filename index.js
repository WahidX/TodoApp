const express = require('express');
const port = 8000;

// DB connection
const db = require('./config/mongoose');

const app = express();

// view-engine setup
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./Assets'));


app.use(express.urlencoded());

// Router initialized
app.use('/', require('./routers'));


// Start server
app.listen(port, function(err) {
    if(err) {
        console.log(`Error while running server: ${err}`);
    }

    console.log(`server running at ${port}`);
})