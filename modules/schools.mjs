export class LearningPath {
  constructor({
    id,
    title,
    courses = [],
  }) {
    this._id = id;
    this._title = title;
    this._courses = courses;
    this.coursesQuantity = courses.length;
  }

  get id(){
    return this._id;
  }

  set id(newId){
      this._id = newId;
  }

  get title(){
    return this._title;
  }

  set title(newTitle){
    this._title = newTitle;
  }

  get courses(){
    return this._courses;
  }

  set courses(newCourses){
    this._courses = newCourses;
  }
};