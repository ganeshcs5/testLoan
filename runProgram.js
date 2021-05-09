
const payment = require('./payment');
const loan = require('./loan');
const balance = require('./balance');


let runProgram = function (data) {
    let mainSplit = data.split("\n");
    let obj = {};
    for (let i = 0; i < mainSplit.length; i++) {
        let values = mainSplit[i].split(" ");
        let task = values[0];
        if (task == 'LOAN') {
            loan(values, obj);
        } else if (task == 'PAYMENT') {
            payment(values, obj)
        } else if (task == 'BALANCE') {
            balance(values, obj);
        }
    }
    console.log(obj);
}

module.exports = runProgram;