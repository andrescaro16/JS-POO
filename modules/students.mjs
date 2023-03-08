import { Comment } from "./lessons.mjs";

export class Student {
    constructor({
        id,
        name,
        email,
        username,
        points = 0,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._username = username;
        this._points = points;
        this._approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
    }


    get id(){
        return this._id;
    }

    set id(newId){
        this._id = newId;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    get email(){
        return this._email;
    }

    set email(newEmail){
        this._email = newEmail;
    }

    get username(){
        return this._username;
    }

    set username(newUsername){
        this._username = newUsername;
    }

    get points(){
        return this._points;
    }

    set points(newPoints){
        this._points = newPoints;
    }

    get approvedCourses(){
        return this._approvedCourses;
    }

    set approvedCourses(newApprovedCourses){
        this._approvedCourses = newApprovedCourses;
    }


    publicarComentario(commentContent) {
        const comment = new Comment({
          content: commentContent,
          studentName: this._name,
        });
        comment.publicar();
    }

};


export class freeStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if (newCourse.isFree) {
            this._approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos " + this.name + ", solo puedes acceder a cursos abiertos")
        }
    }
}


export class basicStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if (newCourse.lang !== "english") {
            this._approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos " + this.name + ", no puedes acceder a cursos en inglés")
        }
    }
}


export class expertStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this._approvedCourses.push(newCourse);
    }
}


export class TeacherStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    }
  
    publicarComentario(commentContent) {
      const comment = new Comment({
        content: commentContent,
        studentName: this._name,
        studentRole: "profesor",
      });
      comment.publicar();
    }
}