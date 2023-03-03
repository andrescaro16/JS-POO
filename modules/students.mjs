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

};