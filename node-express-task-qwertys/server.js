const express = require("express");
const app = express();
const port = 3000;
// const commander = require('commander');
const { Command } = require('commander');


const program = new Command();

program
    .option('-i, --interval <value>', 'Console output recurrence interval (in milliseconds)', 100)
    .option('-t, --timeout <value>', 'Time after which the web client message will be displayed (in milliseconds)', 700)
    .parse(process.argv);


const options = program.opts();


    const interval = parseInt(options.interval);
const timeout = parseInt(options.timeout);

console.log(`interval: ${interval} ms, timeout: ${timeout} ms`);


let intervalId; 

function startContinuousOutput(){
    intervalId = setInterval(() => {
        console.log(`Now : ${new Date().toUTCString()}`);
    }, interval);
}

function stopContinuousOutput() {
    clearInterval(intervalId);
}
app.get('/', (req,res) => {
    // console.log('Received a GET request. Starting continuous output...');
    // const result = await asyncOperation();
    // console.log(result);
    // res.send(result);
    startContinuousOutput();
    setTimeout(() => {
        stopContinuousOutput();
        const finish = new Date().toUTCString();
        res.send(`Current time: ${finish}`);
    },timeout);

});


const server = app.listen(port);

module.exports = { app, server };
