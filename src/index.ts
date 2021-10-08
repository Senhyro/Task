console.log("Test");

import { Environment } from "./classes/environment";
import { Subject } from "./classes/subject";
import { Task } from "./classes/task";

let environment = new Environment("School", "kaka");
let subject = new Subject("subject", "subject");
let task = new Task("task", "task");

let subject2 = new Subject("subject2", "subject2");
let task2 = new Task("task2", "task2");
let task3 = new Task("task3", "task3");

environment.addSubject(subject);
subject.addTask(task);

environment.addSubject(subject2);
subject2.addTask(task2);
subject.addTask(task3);

task3.setId("xxxx");

console.log(environment.getTaskById("xxxx"));