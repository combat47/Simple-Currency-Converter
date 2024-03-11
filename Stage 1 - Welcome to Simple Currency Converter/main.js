let currencyList = {
    USD : 1.0,
    JPY : 113.5,
    EUR : 0.89,
    RUB : 74.36,
    GBP: 0.75,
};

console.log("Welcome to Currency Converter!");

for (const property in currencyList) {
    console.log(`1 USD equals ${currencyList[property]} ${property}`);
}
