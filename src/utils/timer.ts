import { Time } from "./time"
export class Timer {
    startTime: Time;
    endTime: Time;

    constructor(startTime: Time, endTime: Time) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
}