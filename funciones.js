//Funcion de declaración valor que 
function saludar(nombre) {
    document.write(" Hola, " + nombre + "<br>");
  }
  saludar("Juan");
  saludar("Mario");

function suma(a, b) {
    return a + b;
  }
  const resultado = suma(5, 6); 
  document.write("El total de la suma es: " + resultado + "<br>"); 
  
//Funcion de Expresión
// Definición de una función de expresión
const multiplicar = function(x, y) {
  return x * y;
};

// Llamando a la función de expresión
const resultado1 = multiplicar(5, 4);

// Imprimiendo el resultado
document.write("El resultado de la multiplicacion es: " + resultado1 +"");