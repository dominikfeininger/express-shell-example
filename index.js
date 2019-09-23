var express = require('express');
var app = express();
var exec = require('child_process').exec;

function execute(path, callback){
    exec(`bash ${path}`, (err, stdout, stderr) => callback(stdout));
}

app.get('/', (req, res) => {
    res.send('Hello World, put website here ;)')
});

app.get('/on', (req, res) => {
    execute('on.sh', (stdout) => {
        res.send(stdout);
    });
});

app.get('/off', (req, res) => {
    execute('off.sh', (stdout) => {
        res.send(stdout);
    });
})

app.listen(3000);