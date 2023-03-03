export class Course {
    constructor({
        id,
        name,
        classes = [],
        teacher,
    }){
        this._id = id;
        this._name = name;
        this._classes = classes;
        this._teacher = teacher;
    };

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

    get classes(){
        return this._classes;
    }

    set classes(newClasses){
        this._classes = newClasses;
    }

    get teacher(){
        return this._teacher;
    }

    set teacher(newTeacher){
        this._teacher = newTeacher;
    }
};