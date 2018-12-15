var http = require('http');
http.createServer(function (req, res) {
    d = new Date();

    datetext = d.toTimeString();
    
    datetext = datetext.split(' ')[0];
    res.end('HI from Node.js! ' +datetext + ' on ' + process.env.HOSTNAME  + '\n');
    
}).listen(8080, '0.0.0.0');
console.log('Server running at http://:8080/');
