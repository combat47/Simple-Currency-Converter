input = require('sync-input');

let currencies = {
    'JPY': 113.5,
    'EUR': 0.89,
    'RUB': 74.36,
    'USD': 1,
    'GBP': 0.75
};

console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");


console.log("What do you want to convert?");

let fromCurrency = input("From: ").toUpperCase();

if (!Object.keys(currencies).includes(fromCurrency)) {
    console.log("Unknown currency");
    return;
}

let toCurrency = input("To: ").toUpperCase();

if (!Object.keys(currencies).includes(toCurrency)) {
    console.log("Unknown currency");
    return;
}

let amount = Number(input("Amount: "));
let result;

if (isNaN(amount)) {
    console.log("The amount has to be a number");
    return;
} else if (amount < 1) {
    console.log("The amount cannot be less than 1");
    return;
} else {
    result = amount / currencies[fromCurrency] * currencies[toCurrency];
}

console.log(`Result: ${amount} ${fromCurrency} equals ${result.toFixed(4)} ${toCurrency}`);
