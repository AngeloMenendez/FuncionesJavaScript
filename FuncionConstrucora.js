//Funcion Constructora
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        document.write(`Hola, mi nombre es: ${this.nombre} y tengo ${this.edad} anios. <br>`);
    };
}

// Uso de la función constructora para crear objetos Persona
const persona1 = new Persona("Juan", 30,);
const persona2 = new Persona("Maria", 25,);

// Llamando al método saludar para cada objeto
persona1.saludar();
persona2.saludar();