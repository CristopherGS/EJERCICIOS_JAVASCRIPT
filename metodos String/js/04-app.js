const producto = 'Monitor de 20 pulgadas';

//METODOS PARA ELIMINAR ESPACIOS ENTRE LAS PALABRAS
console.log(producto);
console.log(producto.length);

//eliminar del inicio el espacio
console.log(producto.trimStart());
//eliminar el espacio al final
console.log(producto.trimEnd());

//usar varios metodos juntos
console.log(producto.trimStart().trimEnd());

//ESTA funcion es bidireccional
console.log(producto.trim());
