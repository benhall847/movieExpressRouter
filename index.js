const express = require('express');
const app = express();
const port = 1337;
const moviesRoute = require('./routes/movies')

app.use('/movies', moviesRoute)


app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})

