const fs = require('fs');

function index(res) {
  console.log('index');

  fs.readFile('./index.html', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'content-type': 'text/html' });
      res.write('error');
      res.end();
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(data);
      res.end();
    }
  }) 
}

function about(res) {
  console.log('about');

  fs.readFile('./about.html', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'content-type': 'text/html' });
      res.write('error');
      res.end();
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(data);
      res.end();
    }
  })
}

function contactMe(res) {
  console.log('contact-me');

  fs.readFile('./contact-me.html', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'content-type': 'text/html' });
      res.write('error');
      res.end();
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(data);
      res.end();
    }
  })
}

let handle = {};
handle['/'] = index;
handle['/about'] = about;
handle['/contact-me'] = contactMe;


exports.handle = handle;