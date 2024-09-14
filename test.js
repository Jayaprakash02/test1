const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-scripts.com'],
    },
  }));

app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.listen("3000",function(){
    console.log("server is running on port 3000");
});

