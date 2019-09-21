# Ryan-proxy

To start everything run: docker-compose up --build -d

To start local server only run: npm run server-start

links to services running on AWS are defined in /server/index.js 
These will need to be updated:
let commentsUrl = 'http://ec2-54-245-205-70.us-west-2.compute.amazonaws.com:3002'
let bottomPlayerUrl = 'http://ec2-13-57-29-242.us-west-1.compute.amazonaws.com'
let topPlayerUrl = 'http://ec2-3-14-130-218.us-east-2.compute.amazonaws.com'



