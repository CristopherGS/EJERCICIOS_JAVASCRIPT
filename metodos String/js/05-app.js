const producto = 'Monitor de 20 pulgadas';

//METODOS UTILES
//METODO PARA REEMPLAZAR O INSERTAR LETRAS EN UNA PALABRA
console.log(producto);
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));


//.lice para cortar
console.log(producto.slice(0,10));
// console.log(producto.slice(8));
// console.log(producto.slice(2,1));


//alternativa a slice 
console.log(producto.substring(0,10));

//chartAt
console.log(producto.charAt(0))