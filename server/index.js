const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
const bodyParser = require('body-parser');
const request = require('request');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//express middleware for scripts within index.html of proxy
app.use('/scripts/:service/bundle.js', (req, res) => {
  if (req.params.service === 'ryan') {
    request('http://localhost:3002/bundle.js').pipe(res);
  } else if (req.params.service === 'zack') {
    request('http://localhost:3004/bundle.js').pipe(res);
  } else if (req.params.service === 'alastair') {
    request('http://localhost:3001/bundle.js').pipe(res);
  }
})

app.use('/:artist/:song', express.static('client/dist'))
app.use('/', express.static('client/dist'));



app.get('/comments/:artist/:song', (req, res) => {
  console.log(`GET request for artist ${req.params.artist} and song ${req.params.song}`)
  //make sure server for port 3002 is running
  request(`http://localhost:3002/comments/${req.params.artist}/${req.params.song}`).pipe(res);
  //   request(`http://localhost:3002/comments/${req.params.artist}/${req.params.song}`, (request, response, body) => {
  //     if(body) {
  //       res.set({
  //         'content-type': 'application/json'
  //       })
  //       res.send(JSON.parse(body));
  //     } else {
  //       res.end();
  //     }
  //   })
})


const port = 3333
app.listen(port, () => {
  console.log('server is listening on port', port);
})
