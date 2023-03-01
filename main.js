//OBJETO LITERAL
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
      "Curso Definitivo de HTML y CSS",
      "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    },
};

//PROTOTIPO
function Student(name, age, cursosAprobados) {
    //Atributos
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //   this.cursosAprobados.push(nuevoCursito);
    // }
}

//Métodos con prototype
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

//INSTANCIA
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
      "Curso de Introducción a la Producción de Videojuegos",
      "Curso de Creación de Personajes",
    ],
);