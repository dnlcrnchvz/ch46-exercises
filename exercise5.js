let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
document.getElementById('exercise5people').textContent = people;

people.splice(people.indexOf("Dani"), 1);
document.getElementById('exercise5removeDani').textContent = people;

people.splice(people.indexOf("Juan"), 1);
document.getElementById('exercise5removeJuan').textContent = people;

people.splice(people.indexOf("Luis"), 1);
people.unshift("Luis");
document.getElementById('exercise5moveLuis').textContent = people;

people.push("Daniela");
document.getElementById('exercise5addDaniela').textContent = people;

for (let person of people) {
    console.log(person);
    if (person === "Maria") {
        break;
    }
}

let indexOfMaria = people.indexOf("Maria");
console.log(indexOfMaria);
document.getElementById('exercise5indexOfMaria').textContent = indexOfMaria;