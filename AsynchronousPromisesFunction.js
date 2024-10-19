const fs = require('fs').promises;

// Using Promises to read a file
fs.readFile('example.txt', 'utf8')
  .then((data) => {
    console.log('File content:', data);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
