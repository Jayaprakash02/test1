const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet({
    frameguard: {
      action: 'deny' 
    },
  }));

app.get('/', function (req, res) {
    res.send("hello!!");
});

app.listen("3000",function(){
    console.log("server is running on port 3000");
});

