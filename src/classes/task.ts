import { v4 as uuid } from "uuid";
import { Time } from "../utils/time";
import { Timer } from "../utils/timer";
/*
    The task class contains a title, description, multiple timers since a task can be worked on multiple times.
*/
export class Task {
    private id: string;
    private title: string;
    private description: string;
    private timers: Array<Timer>;
    private startTime: Time;
    private endTime: Time;
    private comments: Array<string>;
    private finished: boolean;

    public constructor(title: string = "", description = "") {
        this.id = uuid();
        this.title = title;
        this.description = description;
        this.timers = [];
        this.startTime = new Time();
        this.endTime = new Time();
        this.comments = [];
        this.finished = false;
    }

    public addTimer(timer: Timer): void {
        this.timers.push(timer);
    }

    public start(): void {
        this.startTime = new Time();
    }

    public end(): void {
        this.endTime = new Time();
    }

    public toggleFinish(): void {
        this.finished != this.finished;
    }


    /*
     * Getters & Setters
     */

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getTimers(): Array<Timer> {
        return this.timers;
    }

    public setTimers(timers: Array<Timer>): void {
        this.timers = timers;
    }

    public getStartTime(): Time {
        return this.startTime;
    }

    public setStartTime(startTime: Time): void {
        this.startTime = startTime;
    }

    public getEndTime(): Time {
        return this.endTime;
    }

    public setEndTime(endTime: Time): void {
        this.endTime = endTime;
    }

    public getComments(): Array<string> {
        return this.comments;
    }

    public setComments(comments: Array<string>): void {
        this.comments = comments;
    }

    public isFinished(): boolean {
        return this.finished;
    }

    public setFinished(finished: boolean): void {
        this.finished = finished;
    }
}
