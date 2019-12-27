/*
Spin up a Node.js driver server (on port 3000)
Handle two routes: '/' and '/users'
    * Return some greeeting text on '/'
    * Return a list of dummy users (e.g. <ul><li>User 1</li></ul>)
Add a form with a 'username' <intput> to the '/' page and submit a POST request to '/create-user' upon a button click.
Add the '/create-user' route and parse the incoming data (i.e. the username) and simply log it to the console.
*/

const http = require('http');
const routes = require('./routes');
const server = http.createServer(routes);
server.listen(3000);