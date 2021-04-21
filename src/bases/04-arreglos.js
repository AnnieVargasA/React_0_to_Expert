//Arreglos en JS

const arreglo = [1,2,3];

let arreglo2 = [...arreglo,4,5];

//Método .map()
const arreglo3 = arreglo2.map(function(numero){
  return numero * 10;
});

console.log('Arreglo:', arreglo);
console.log('Arreglo2:',arreglo2);
console.log('Arreglo3:', arreglo3);