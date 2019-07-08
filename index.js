const http = require('http');
const port = process.env.port || 9000;

const app = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('{ "success":true, "data":"Index", "message":"Hello World", "code":200}');
});

app.listen(port, () => {
  console.log(`Server running properly on port : ${port}`)
});