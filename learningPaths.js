class LearningPath {
  constructor({name, cursos = []}){
    this.name = name;
    this.cursos = cursos;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  cursos: [
    "Curso definitivo de HTML y CSS",
    "Curso práctico de HTML y CSS",
    "POO JavaScript",
    "Asincronismo JS",
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Ciencia de Datos",
  cursos: [
    "Matplotlib",
    "Gráficas con python",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Desarrollo de Videojuegos",
  cursos: [
    "Unity",
    "C++ para videojuegos",
  ],
});


class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});