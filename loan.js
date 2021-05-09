function loan(values, obj) {
    let bank = values[1];
    let nameN = values[2];
    let priciple = parseInt(values[3]);
    let year = parseInt(values[4]);
    let percent = parseInt(values[5]);
    if (obj[nameN] == undefined) {
        obj[nameN] = {};
    }


    let bankObj = obj[nameN];
    bankObj[bank] = {};
    bankObj[bank].priciple = priciple;
    bankObj[bank].year = year;
    bankObj[bank].percent = percent;
    bankObj[bank].payback = Math.ceil(parseFloat(priciple * (percent / 100) * year)) + priciple;
    bankObj[bank].months = year * 12;
    bankObj[bank].emi = Math.ceil(bankObj[bank].payback / (bankObj[bank].months));
}

module.exports = loan;