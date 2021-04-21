//Objetos literales

const persona = { 
  nombre: 'Annie',
  apellido: 'Vargas',
  edad: '27 años',
  animal: 'perros',
  direccion:{
    numInterior: '94',
    ciudad: 'CDMX',
  }
}


const persona2 = {...persona};

persona2.nombre='Valente';
persona2.edad='22 años';
persona2.animal='pericos';

console.log(' persona:',persona);
console.log('persona2:',persona2);