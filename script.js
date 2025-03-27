// Append values to the display
function appendValue(value) {
    if (typeof value !== "undefined") {
        document.getElementById("display").value += value;
    }
}

// Clear display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete last character (Backspace)
function deleteLastCharacter() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Perform calculation
function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        if (expression.trim() === "") {
            document.getElementById("display").value = "Error";
            return;
        }
        let result = new Function("return " + expression)(); // Safe evaluation
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}

// Basic arithmetic operations
function add() { appendValue("+"); }
function subtract() { appendValue("-"); }
function multiply() { appendValue("*"); }
function divide() { appendValue("/"); }

// Convert currency (USD to KES)
function convertCurrency() {
    let usd = parseFloat(document.getElementById("currency-input").value);
    if (isNaN(usd) || usd < 0) {
        document.getElementById("currency-result").innerText = "Enter a valid USD amount.";
        return;
    }
    let kes = (usd * 130.5).toFixed(2); // Example exchange rate
    document.getElementById("currency-result").innerText = `${usd} USD = ${kes} KES`;
}

// Convert distance (KM to Miles)
function convertDistance() {
    let km = parseFloat(document.getElementById("distance-input").value);
    if (isNaN(km) || km < 0) {
        document.getElementById("distance-result").innerText = "Enter a valid distance in KM.";
        return;
    }
    let miles = (km * 0.621371).toFixed(2);
    document.getElementById("distance-result").innerText = `${km} KM = ${miles} Miles`;
}

// Convert weight (KG to Pounds)
function convertWeight() {
    let kg = parseFloat(document.getElementById("weight-input").value);
    if (isNaN(kg) || kg < 0) {
        document.getElementById("weight-result").innerText = "Enter a valid weight in KG.";
        return;
    }
    let pounds = (kg * 2.20462).toFixed(2);
    document.getElementById("weight-result").innerText = `${kg} KG = ${pounds} Pounds`;
}
