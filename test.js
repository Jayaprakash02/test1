const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet({
    // Content Security Policy (CSP)
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"], // Only allow content from your own domain
        scriptSrc: ["'self'", "https://trusted-cdn.com"], // Example for allowing specific scripts
        styleSrc: ["'self'", "'unsafe-inline'", "https://trusted-cdn.com"], // Allow styles from a trusted CDN
        imgSrc: ["'self'", "data:"], // Allow images from your own domain and data URIs
        connectSrc: ["'self'"], // Only allow connecting to your own API endpoints
        fontSrc: ["'self'", "https://trusted-cdn.com"], // Allow fonts from your own domain and trusted CDN
        objectSrc: ["'none'"], // Disallow embedding objects like Flash
        upgradeInsecureRequests: [], // Ensure HTTP resources are upgraded to HTTPS
      },
    },
  
    // X-Frame-Options (Clickjacking prevention)
    frameguard: {
      action: 'deny' // Prevents the site from being embedded in iframes
    },
  
    // X-Content-Type-Options (Prevent MIME Sniffing)
    noSniff: true,
  
    // Referrer Policy
    referrerPolicy: {
      policy: 'no-referrer' // Don't send the Referer header
    },
  
    // HTTP Strict Transport Security (HSTS)
    hsts: {
      maxAge: 31536000, // Force HTTPS for one year (in seconds)
      includeSubDomains: true, // Apply HSTS to all subdomains
      preload: true, // Add your site to the HSTS preload list
    },
  
    // Permissions Policy (Controls browser feature permissions)
    permissionsPolicy: {
      features: {
        geolocation: ['none'], // Disallow access to geolocation
        camera: ['none'], // Disallow access to the camera
        microphone: ['none'], // Disallow access to the microphone
        fullscreen: ['self'], // Only allow full-screen access from your own domain
      }
    },
  
    // X-Permitted-Cross-Domain-Policies
    permittedCrossDomainPolicies: {
      permittedPolicies: 'none' // Disallow cross-domain requests from Adobe products
    },
  }));

app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.listen("3000",function(){
    console.log("server is running on port 3000");
});

