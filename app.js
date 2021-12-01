const http =  require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type':'text/html'}); // Type 'text/plain' to display plain text
    res.write('<h1>Home Page</h1>');
    res.end();
})
.listen(5000);

