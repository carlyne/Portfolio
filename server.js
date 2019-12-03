const { createApp, createServer } = require('yion');

const app = createApp();
const server = createServer(app);
const port = process.env.NODE_PORT || 8080;

app.link('/images', __dirname + '/public/images');
app.link('/styles', __dirname + '/public/css');
app.link('/scripts', __dirname + '/public/js');

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html', 'index.html', 'text/html', false);
});

server.listen(port);
server.on('listening', () => console.log('Server start on port ' + port));
