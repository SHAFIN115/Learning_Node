// Simple Hello World in Node.js
console.log('Hello, World!');
const math = require('./math');

// Create an HTTP server
const http = require('http');
const serverForNode = http.createServer((req, res) => {
  res.statusCode = 202;
  res.setHeader('Content-Type', 'text/plain');

  // Combine the messages into a single string
  const responseMessage = `
    Hello from Node.js Server!
    Addition: ${math.add(5, 3)}
    Subtraction: ${math.subtract(5, 3)}
  `;

  // Call res.end() only once, with the full response
  res.end(responseMessage);
});

serverForNode.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});