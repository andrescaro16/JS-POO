export class Lesson {
    constructor({
        id,
        title,
    }){
        this._id = id;
        this._title = title;
    };

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
};