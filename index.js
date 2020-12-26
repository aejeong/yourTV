const express = require('express');

const port = 3000;
const server = express()
const serverListner = ()=>{
    console.log('listeing on : http://localhost:'+port);
}
server.listen(port,'localhost',serverListner)