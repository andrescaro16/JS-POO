import {Teacher} from './modules/teachers.js'
import {Course} from './modules/courses.js'
import {Lesson} from './modules/lessons.js'
import {LearningPath} from './modules/schools.js'
import {Student} from './modules/students.js'


// -------------------- Teachers ---------------------
const FreddyVega = new Teacher({
  id: 1,
  name: 'Freddy Vega',
  speciality: 'CEO',
});
console.log(FreddyVega);
window.FreddyVega = FreddyVega;

const ClauAlderete = new Teacher({
  id: 2,
  name: 'Clau Alderete',
  speciality: 'Digital Marketing',
});
console.log(ClauAlderete);
window.ClauAlderete = ClauAlderete;


// ------------------- Lecciones ----------------------
const lesson1PB = new Lesson({
  id: 1,
  title: 'Clase 1 Programación Básica',
});
console.log(lesson1PB);
window.lesson1PB = lesson1PB;

const lesson1DM = new Lesson({
  id: 2,
  title: 'Clase 1 Marketing Digital',
});
console.log(lesson1DM);
window.lesson1DM = lesson1DM;


// ------------------- Cursos ----------------------------
const cursoProgramacionBasica = new Course({
  id: 1,
  name: "Curso gratis de programación básica",
  classes: [lesson1PB],
  teacher: FreddyVega,
});
console.log(cursoProgramacionBasica);
window.cursoProgramacionBasica = cursoProgramacionBasica;

const cursoIntroMarketingDigital = new Course({
  id: 2,
  name: 'Curso de Introducción al Marketing Digital',
  classes: [lesson1DM],
  teacher: ClauAlderete
});
console.log(cursoIntroMarketingDigital);
window.cursoIntroMarketingDigital = cursoIntroMarketingDigital;


// ------------------- Escuelas ----------------------------
const escuelaDesarrolloWeb = new LearningPath({
  id: 1,
  title: 'Escuela de Desarrollo Web',
  courses: [cursoProgramacionBasica],
});
console.log(escuelaDesarrolloWeb);
window.escuelaDesarrolloWeb = escuelaDesarrolloWeb;

const escuelaMarketingDigital = new LearningPath({
  id: 2,
  title: 'Marketing Digital',
  courses: [cursoIntroMarketingDigital],
});
console.log(escuelaMarketingDigital);
window.escuelaMarketingDigital = escuelaMarketingDigital;


// ------------------- Estudiantes ----------------------------
const miguel = new Student({
  id: 1,
  name: 'Miguel',
  email: 'miguel@gmail.com',
  username: 'mike',
  points: 40000,
  approvedCourses: [cursoProgramacionBasica],
  learningPaths: [escuelaDesarrolloWeb]
});
console.log(miguel);
window.miguel = miguel;





/* ALGUNAS EXPLICACIONES


OBJETO LITERAL
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

PROTOTIPO
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Métodos con prototype
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

INSTANCIA
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
      "Curso de Introducción a la Producción de Videojuegos",
      "Curso de Creación de Personajes",
    ],
);


Prototipos con la sintaxis de clases (Las clases son prototipos en JS)
class Student2 {
    constructor({
      name,
      cursosAprobados = [],
      age,
      email,
    }) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
    }
  
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
}
  
const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
}); */