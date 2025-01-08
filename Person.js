const person = {
    name: "John",
    age: 20,
    greet() {
        return `Hello, my name is ${this.name}`;
    },
    isAdult() {
        return this.age >= 18;
    }
};

console.log(person.greet());
console.log("Is adult:", person.isAdult());
