class Canvas {

    constructor(width, height){

        // fields for the class
        this.width = width;
        this.height = height;

        this.context = undefined;
    }

    createElement(){
        let ele = document.createElement("canvas");
        let app = document.querySelector(".app");
        ele.width = this.width;
        ele.height = this.height;
        app.append(ele);

        this.context = ele.getContext("2d");
    }

    clear(){
        this.context.clearRect(0, 0, this.width, this.height);
    }

}