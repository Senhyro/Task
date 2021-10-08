
import { v4 as uuid } from "uuid";
import {Subject} from "./subject";
import { Task } from "./task";

export class Environment {

    private title: string;
    private description: string;
    private subjects: Array<Subject>;
    private id: string;

    constructor(title: string, description: string) {
        this.id = uuid();
        this.title = title;
        this.description = description
        this.subjects = [];
    }

    public addSubject(subject: Subject) {
        this.subjects.push(subject);
    }

    public print() {
        console.log(`-Environment-`);
        console.log(`${this.title}`);
        console.log(`${this.description}`);

        for(let i = 0; i < this.subjects.length; i++ ) {
            let currentSubject = this.subjects[i];
            console.log(`\tSubject`);
            console.log(`\t${currentSubject.getTitle()}`);
            console.log(`\t${currentSubject.getDescription()}`);

            for(let j = 0; j < currentSubject.getTasks().length; j++ ) {
                let currentTask = currentSubject.getTasks()[j];
               
                console.log(`\t\tTasks`);
                console.log(`\t\t${currentTask.getTitle()}`);
                console.log(`\t\t${currentTask.getDescription()}`);
            }
        }
    }

    public printDebug() {
        console.log(JSON.stringify(this));
    }

    public getTaskById(id: string) {

        for(let i = 0; i < this.subjects.length; i ++) {
            for(let j = 0; j < this.subjects[i].getTasks().length; j++) {
                if(this.subjects[i].getTasks()[j].getId() === id) {
                    return this.subjects[i].getTasks()[j];
                }
            }
        }
    }

    /* Getters & Setters */
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

    public getSubjects(): Array<Subject> {
        return this.subjects;
    }

    public setSubjects(subjects: Array<Subject>): void {
        this.subjects = subjects;
    }


}