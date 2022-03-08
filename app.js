const express    = require('express') 
const bodyParser = require('body-parser')
const feedRoutes = require('./routes/feed')
const app =express()
// Handling incoming requests
// for each request
// parse  json body
app.use(bodyParser.json())
//  set needed headers 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use('/feed',feedRoutes)

app.listen(8080)