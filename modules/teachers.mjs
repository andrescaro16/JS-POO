export class Teacher {
    constructor({
        id,
        name,
        speciality,
    }) {
        this._id = id;
        this._name = name;
        this.speciality = speciality;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }


    get id(){
        return this._id;
    }

    set id(newId){
        this._id = newId;
    }

};