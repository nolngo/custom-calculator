var conversionRates = {
    "jpy": 106.03,
    "euro": 0.85,
    "cny": 6.79,
    "cad": 1.32,
    "rub": 77.30,
    "vnd": 23192,
    "peso": 21.35,
    "aed": 3.67,
    "inr": 73.27
}
let button = document.getElementById("button");
button.addEventListener("click",function(){
    let foreignCurrency = document.getElementById("foreign").value;
    let conversionRate = conversionRates[foreignCurrency];
    let currencyAmount = document.getElementById("amount").value;
    var toFrom = document.getElementById("to-from").value;
        if (toFrom == "from-USD") {
            let outputValue = document.getElementById("output").value = currencyAmount * conversionRate;
        } else {
            let outputValue = document.getElementById("output").value = currencyAmount / conversionRate;
        }
})
