import { v4 as uuid } from "uuid";
import {Task} from "./task";
export class Subject {
    
    private id: String;
    private title: String;
    private description: String;
    private tasks: Array<Task>;

    constructor(title: String, description: String = "") {
        this.id = uuid();
        this.tasks = [];
        this.title = title;
        this.description = description;
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    /* Getters & Setters */
    public getId(): String {
        return this.id;
    }

    public setId(id: String): void {
        this.id = id;
    }

    public getTitle(): String {
        return this.title;
    }

    public setTitle(title: String): void {
        this.title = title;
    }

    public getDescription(): String {
        return this.description;
    }

    public setDescription(description: String): void {
        this.description = description;
    }

    public getTasks(): Array<Task> {
        return this.tasks;
    }

    public setTasks(tasks: Array<Task>): void {
        this.tasks = tasks;
    }
}