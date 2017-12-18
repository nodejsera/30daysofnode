var cluster = require('cluster');
var http = require('http');
var numofCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master with Process ID : ${process.pid} is running`);

  // Fork workers.
  for (var i = 0; i < numofCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker with Process ID : ${worker.process.pid} died`);
  });
} else {
  // Workers sharing an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('An example of clusters\n');
  }).listen(3000);
  console.log(`Worker with Process ID : ${process.pid} started`);

}