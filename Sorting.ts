//ein array von personen mit namen und alter
interface Person {
  name: string;
  age: number;
}

//ein Array von personen
const persons: Person[] = [
  { name: "Simran", age: 19 },
  { name: "Albert", age: 99 },
  { name: "Alexandra", age: 20 },
];

// aufsteigend sortieren
persons.sort((a, b) => a.name.localeCompare(b.name));

console.log("Nach Namen sortiert:", persons);

const filterLetter = "A";

// filtern von allen personen die mit einen bestimmten buchstaben beginnen
const filteredPersons = persons.filter((person) =>
  person.name.toUpperCase().startsWith(filterLetter.toUpperCase())
);

console.log(`Personen, deren Name mit '${filterLetter}' beginnt:`, filteredPersons);
