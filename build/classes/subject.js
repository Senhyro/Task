"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
var uuidv4_1 = require("uuidv4");
var Subject = /** @class */ (function () {
    function Subject(title, description) {
        if (description === void 0) { description = ""; }
        this.id = (0, uuidv4_1.uuid)();
        this.tasks = [];
        this.title = title;
        this.description = description;
    }
    Subject.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    /* Getters & Setters */
    Subject.prototype.getId = function () {
        return this.id;
    };
    Subject.prototype.setId = function (id) {
        this.id = id;
    };
    Subject.prototype.getTitle = function () {
        return this.title;
    };
    Subject.prototype.setTitle = function (title) {
        this.title = title;
    };
    Subject.prototype.getDescription = function () {
        return this.description;
    };
    Subject.prototype.setDescription = function (description) {
        this.description = description;
    };
    Subject.prototype.getTasks = function () {
        return this.tasks;
    };
    Subject.prototype.setTasks = function (tasks) {
        this.tasks = tasks;
    };
    return Subject;
}());
exports.Subject = Subject;
