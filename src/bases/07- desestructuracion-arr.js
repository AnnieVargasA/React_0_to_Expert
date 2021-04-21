/*
      Desestructuración 
            ó 
Asignación desestructurante
        (Arreglos)

*/

const princesas = ["Blancanieves", "Aurora", "Ariel", "Bella"];
const [, , p3] = princesas;
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(`letras: ${letras} y números: ${numeros}`);

// Tarea
// 1. el primer valor del arr se llamará "nombre"
// 2. el segundo "setNombre"
// 3. imprimir nombre
// 4. llamar setNombre()

const state = (valor) => {
  return [ 
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = state("Annie");

console.log(nombre);
setNombre();
