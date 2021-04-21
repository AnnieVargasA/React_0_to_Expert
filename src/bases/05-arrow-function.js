//Funciones

const saludar=function(nombre) {
  return `Hola, ${nombre}`; 
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
};

const saludar3 = nombre => `Hola, ${nombre}`;

const saludarMundo = () => `Hola Mundo`;

console.log(`
  Este es un saludo desde una función: 
    saludo 1: ${saludar('Annie')}
    saludo 2: ${saludar2('Vale')}
    saludo 3: ${saludar3('Paco')}
    saludo 4: ${saludarMundo}
  `)

const getUser = () => {
  return ({
    nombre: 'Annie',  
  })
}
const user = getUser();

console.log(user)

/* 
  Tarea:
  1.- Tranformar a función de flecha
  2.- Retornar objeto implícito
  3.- Pruebas
*/

function getUsuarioActivo(nombre){
  return ({
    uid: 'ABC-123',
    userName: nombre,
  })
};

const userActivo = getUsuarioActivo('Fernando');
console.log('Resultado Tarea: ', userActivo);

const getUserAF = (nombre) =>({
  uid: 'ABC-123',
  userName: nombre,
  }
);

const retornoAR = getUserAF('Anahi');
console.log('Resultado de AF: ', retornoAR);