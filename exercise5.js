let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);

people.splice(people.indexOf("Dani"), 1);

people.splice(people.indexOf("Juan"), 1);

people.splice(people.indexOf("Luis"), 1);
people.unshift("Luis");

people.push("Daniela");

for (let person of people) {
    console.log(person);
    if (person === "Maria") {
        break;
    }
}

let indexOfMaria = people.indexOf("Maria");
console.log(indexOfMaria);

console.log(people);