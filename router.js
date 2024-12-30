const fs = require('fs');

function route(pathname, handle, res) {
  console.log('pathname: ', pathname);

  if (typeof handle[pathname] === 'function') {
    handle[pathname](res);
  } else {
      fs.readFile('./404.html', 'utf-8', (err, data) => {
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

};

exports.route = route;