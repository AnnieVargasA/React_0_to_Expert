import { heroes } from "./data/heroes";

const getHeroeByID = (id) => {
  return heroes.find((hero) => hero.id === id);
};

const getHeroesByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);

console.log("Se obtiene por ID: ", getHeroeByID(2));
console.log("Se obtiene por owner:", getHeroesByOwner("Marvel"));
