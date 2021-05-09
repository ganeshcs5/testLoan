function balance(values, obj) {
    let name = values[2];
    let bank = values[1];
    let months = values[3];
    let payedEMI = 0;
    let emiRemains = 0;
    if (obj[name][bank].paymentAmount != undefined) {
        if (months >= obj[name][bank].monthOfPayment) {
            payedEMI = (obj[name][bank].emi * months) + obj[name][bank].paymentAmount;

        } else {
            payedEMI = (obj[name][bank].emi * months);
        }
        emiRemains = Math.ceil((-payedEMI + obj[name][bank].payback) / obj[name][bank].emi);
    } else {
        payedEMI = (obj[name][bank].emi * months);
        emiRemains = Math.ceil((-payedEMI + obj[name][bank].payback) / obj[name][bank].emi);
    }
    console.log(bank + " " + name + " " + payedEMI + " " + emiRemains);
}

module.exports = balance;