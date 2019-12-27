const handler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write("<html>");
        res.write("<head><title>My First Node Assignment</title></head>");
        res.write('<body>Welcome to my first node programming assignment');
        res.write('<div><form method="POST" action="/create-user"><input type="text" name="username"><button type="submit">CREATE USER</button></form></div></body></html>');
        res.end();
    }

    if(url === '/users'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html><head><title>USERS</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>');
        res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            let message = Buffer.concat(body).toString();
            console.log(message);
            console.log(message.split("=")[1].split("+").map(word => {return word.toUpperCase()}));
        });
        res.end();
    }
};
module.exports = handler;