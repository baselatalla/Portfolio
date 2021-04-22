'use strict';
// make a variable called express to use the express library
const express = require('express'); //npm install express
// server has all the Express properities and methods
const server = express();
const PORT =  process.env.PORT || 1997;
server.use(express.static('./public'))
// the server is ready for listening
server.listen(PORT, ()=>{
    console.log(`listening to ${PORT}`);
})
