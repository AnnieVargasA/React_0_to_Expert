// Template Strings

const nombre = 'Annie';
const apellido = 'Vargas';
const animal = 'perros'

const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto2 = `
  Mi nombre es ${nombreCompleto}
  Mi edad es de ${20+7} años
`

function getSaludo(animal){
  return `Hola, ${nombreCompleto2} y me gustan los ${animal}`;
}

console.log( `Este es un saludo: ${getSaludo(animal)}`);

