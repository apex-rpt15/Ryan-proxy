const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
const bodyParser = require('body-parser');
const request = require('request');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

let commentsUrl = 'http://ec2-54-245-205-70.us-west-2.compute.amazonaws.com:3002'
let bottomPlayerUrl = 'http://ec2-13-57-29-242.us-west-1.compute.amazonaws.com'
let topPlayerUrl = 'http://localhost:3001'

//express middleware for scripts within index.html of proxy
app.use('/scripts/:service/bundle.js', (req, res) => {
  console.log(`request for ${req.params.service}`)
  if (req.params.service === 'ryan') {
    request(`${commentsUrl}/bundle.js`).on('error', () => {
      console.log('comments are down');
      res.end();
    }).pipe(res);
  } else if (req.params.service === 'zack') {
    request(`${bottomPlayerUrl}/bundle.js`).on('error', () => {
      console.log('bottom player is down');
      res.end('Bottom Player is down');
    }).pipe(res);
  } else if (req.params.service === 'alastair') {
    request(`${topPlayerUrl}/bundle.js`).on('error', () => {
      console.log('top player is down');
      res.end();
    }).pipe(res);
  }
})

app.use('/:artist/:song', express.static('client/dist'))
app.use('/', express.static('client/dist'));



app.get('/comments/:artist/:song', (req, res) => {
  console.log(`GET request for artist ${req.params.artist} and song ${req.params.song}`)
  //make sure comments ec2 url is accurate and currently running
  request(`${commentsUrl}/comments/${req.params.artist}/${req.params.song}`).pipe(res);
})


const port = 3000
app.listen(port, () => {
  console.log('server is listening on port', port);
})
