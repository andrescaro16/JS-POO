function playVideoURL(videoId) {
    const URL = "https://classvideo/" + videoId;
    console.log("Reproduciendo clase " + URL);
}

function stopVideoURL(videoId) {
    const URL = "https://classvideo/" + videoId;
    console.log("Pausando clase " + URL);
}


export class Lesson {
    constructor({
        id,
        title,
        videoId,
    }){
        this._id = id;
        this._title = title;
        this._videoId = videoId;
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

    get videoId(){
        return this._videoId;
    }

    set videoId(newTitle){
        this._title = newTitle;
    }

    playLesson() {
        playVideoURL(this._videoId);
    }

    pauseLesson() {
        stopVideoURL(this._videoId);
    }
};


export class Comment {
    constructor({
      content,
      studentName,
      studentRole = "estudiante",
    }) {
      this.content = content;
      this.studentName = studentName;
      this.studentRole = studentRole;
      this.likes = 0;
    }
  
    publicar() {
      console.log(this.studentName + " (" + this.studentRole + ")");
      console.log(this.likes + " likes");
      console.log(this.content);
    }
}