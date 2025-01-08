const temperatureConverter = {
    toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    },
    toFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }
};

// Example
console.log("32°F to Celsius:", temperatureConverter.toCelsius(32));
console.log("0°C to Fahrenheit:", temperatureConverter.toFahrenheit(0));
