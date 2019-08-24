const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000
app.listen(port, () => {
  console.log('server is listening on port', port);
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

