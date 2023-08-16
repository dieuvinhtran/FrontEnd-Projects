export class Task{
    constructor(){
        this.click = 0;
    }

    clickMe(){
        this.click++;
    }

    get clickCount(){
        return this.click;
    }
}