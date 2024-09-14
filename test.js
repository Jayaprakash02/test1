const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "https://apis.google.com"],
          styleSrc: ["'self'", "https://fonts.googleapis.com"],
          imgSrc: ["'self'", "data:"],
          connectSrc: ["'self'"],
        },
      },
      frameguard: { action: 'deny' }, 
      hsts: { maxAge: 63072000, includeSubDomains: true }, 
      referrerPolicy: { policy: 'no-referrer' }, 
    })
  );

app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.listen("3000",function(){
    console.log("server is running on port 3000");
});

