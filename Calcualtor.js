function calculator(num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num2 === 0 ? "Cannot divide by zero" : num1 / num2;
        default:
            return "Invalid operation";
    }
}

// Example
const num1 = 10;
const num2 = 5;
const operation = "divide";
console.log(calculator(num1, num2, operation));
