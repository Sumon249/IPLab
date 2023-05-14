const fs = require("fs");
const http = require("http");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let greetingsList = [];
let name;

rl.question("What is your name?\n", (answer) => {
    name = answer;
    // console.log(name);

    fs.readFile("./greetings.txt", 'utf-8', (err, data) => {
        if (err) {
            console.log("The File doesnt exist");
            return;
        }
        // console.log(data);
        greetingsList = data.split('\r\n');

        greetingsList.forEach(greeting =>{
            let randomIndex = Math.floor(Math.random() * greetingsList.length);
            let randomGreeting = greetingsList[randomIndex];

            console.log(`${randomGreeting}, ${name}`);
        })
    })

    rl.close();
})


