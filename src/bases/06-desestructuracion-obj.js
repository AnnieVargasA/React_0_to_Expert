/*
      Desestructuración 
            ó 
Asignación desestructurante
        (Objetos)
*/

const persona = {
  nombre: "Annie",
  apellido: "Vargas",
  edad: "27 años",
  animal: "perro",
  color: "rosa",
  clave: "dev",
};

const {
  nombre: nombre2, //Renombramos
  apellido,
  edad,
  animal,
  color,
} = persona;

console.log(nombre2);

console.log(`
Hola, mi nombre es ${nombre2} ${apellido} y tengo ${edad}. 
Mi color favorito es el ${color} y mi animal favorito es el ${animal}.
`);

const UseContext = ({ clave, nombre, apellido, rango = "Frontend Junior" }) => {
  /*console.log(`
      Soy ${nombre} ${apellido}, soy ${rango} y esta es una Desestructuración
      desde una arrow function.
      `)*/
  return {
    nombreClave: clave,
    anios: edad,
    domicilio: {
      calle: 317,
      num: 94,
      colonia: "El Coyol",
    },
  };
};

const {
  nombreClave,
  anios,
  domicilio: { calle, num, colonia },
} = UseContext(persona);

console.log(nombreClave, anios);
console.log(calle, num, colonia);
