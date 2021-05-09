const filename = process.argv[2];
const fs = require('fs');
const runProgram = require('./runProgram')

try {
    const data = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
    runProgram(data);
} catch (error) {
    console.log('no such file or no a correct data')
}




