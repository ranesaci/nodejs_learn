const app = require('./app');
const fs = require('fs');
fs.writeFileSync('test1.txt', "sachin Rane");

console.log(app.y);
var x = 10;
console.log(x);

console.log("dirName = "+ __dirname)

const http = require('http');

const colors = require('colors');

// const { default: chalk } = require('chalk');
console.log("sachin".red);
//console.log(chalk.green("I am in green"));

//print process
console.log(process.argv);
console.log('first passed argument:'+process.argv[2]);

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'application/json'});
    res.write(JSON.stringify(app.data));
    res.end();
}).listen(5000);