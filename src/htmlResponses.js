// Requires
const fs = require('fs'); // pull in the file system module

// Index page
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

// Index Function
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

// Page2 Function
const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

// Page3 Function
const getPage3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page3);
  response.end();
};

// Exports
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
module.exports.getPage3 = getPage3;
