console.log('hello world');

global.luckyNum = '23'
console.log(global.luckyNum); // 23


// global: use it to save global variable throughout the app. Similar to window in the browser
console.log(process.platform) // darwin

// process: interact with the current process to information like the OS platform or environment variables
console.log(process.env.USER); // jeffvarughese

process.on('exit', function() {

})

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum');
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

const { readFileSync } = require('fs');

// Blocking
const txt = readFileSync('./hello.txt', 'utf8');

// Non-blocking
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt);
// })

console.log('do this ASAP');
console.log(txt);


// Promise-based, non-blocking
const { readFile } = require('fs').promises;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }


// Modules are files that export their code
// Traditional way to import module is 'require()'
// ES modules use import/export syntax

const { hello } = require('./cool.js');

console.log(hello);


const express = require('express');

const app = express();

// app.get('/', (request, response) => {
//     readFile('./home.html', 'utf8', (err, html) => {
//         if (err) {
//             response.status(500).send('sorry, out of order')
//         }
//         response.send(html);

//     })
// })

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});

app.listen(process.env.PORT || 3001, () => console.log('App is available on http://localhost:3001'));