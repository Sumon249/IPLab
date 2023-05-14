const fs = require("fs");
const http = require("http");
const url = require("url");
const readline = require('readline');

fs.readFile("./greetings.txt", 'utf-8', (err, data) => {
    if (err) {
        console.log("The File doesnt exist");
        return;
    }
    // console.log(data);
    greetingsList = data.split('\r\n');
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        // res.setHeader('ContentType', 'text/plain');
        const parsedUrl = url.parse(req.url, true)
        const path = parsedUrl.path;
        const query = parsedUrl.query;
        if(query.name == undefined){
            res.end("Name undefined");

        }
        else{
            res.end(`${greetingsList[0]}, ${query.name}`);
        }
        // res.end(query);
    })
    server.listen(8080, () => {
        console.log("Server running at 8080");
    })
})