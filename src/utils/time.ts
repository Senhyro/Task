export class Time {

    
    dt = new Date();
    month: String;
    day: String;
    year: String;
    seconds: String;
    minutes: String;
    hours: String;
    

    constructor() {
        this.month = (this.dt.getMonth()+1).toString().padStart(2, '0');
        this.day = this.dt.getDate().toString().padStart(2, '0');
        this.year = this.dt.getFullYear().toString().padStart(4, '0');
        this.hours = this.dt.getHours().toString().padStart(2, '0');
        this.minutes = this.dt.getMinutes().toString().padStart(2, '0');
        this.seconds = this.dt.getSeconds().toString().padStart(2, '0');
    }




}