let payment = function (values, obj) {
    let bank = values[1];
    let name = values[2];
    let paymentAmount = values[3];
    let monthOfPayment = values[4];
    obj[name][bank].paymentAmount = parseInt(paymentAmount);
    obj[name][bank].monthOfPayment = parseInt(monthOfPayment);
}

module.exports = payment;