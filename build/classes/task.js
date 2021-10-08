"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var uuidv4_1 = require("uuidv4");
var time_1 = require("../utils/time");
/*
    The task class contains a title, description, multiple timers since a task can be worked on multiple times.
*/
var Task = /** @class */ (function () {
    function Task(title, description) {
        if (title === void 0) { title = ""; }
        if (description === void 0) { description = ""; }
        this.id = (0, uuidv4_1.uuid)();
        this.title = title;
        this.description = description;
        this.timers = [];
        this.startTime = new time_1.Time();
        this.endTime = new time_1.Time();
        this.comments = [];
        this.finished = false;
    }
    Task.prototype.addTimer = function (timer) {
        this.timers.push(timer);
    };
    Task.prototype.start = function () {
        this.startTime = new time_1.Time();
    };
    Task.prototype.end = function () {
        this.endTime = new time_1.Time();
    };
    Task.prototype.toggleFinish = function () {
        this.finished != this.finished;
    };
    /*
     * Getters & Setters
     */
    Task.prototype.getId = function () {
        return this.id;
    };
    Task.prototype.setId = function (id) {
        this.id = id;
    };
    Task.prototype.getTitle = function () {
        return this.title;
    };
    Task.prototype.setTitle = function (title) {
        this.title = title;
    };
    Task.prototype.getDescription = function () {
        return this.description;
    };
    Task.prototype.setDescription = function (description) {
        this.description = description;
    };
    Task.prototype.getTimers = function () {
        return this.timers;
    };
    Task.prototype.setTimers = function (timers) {
        this.timers = timers;
    };
    Task.prototype.getStartTime = function () {
        return this.startTime;
    };
    Task.prototype.setStartTime = function (startTime) {
        this.startTime = startTime;
    };
    Task.prototype.getEndTime = function () {
        return this.endTime;
    };
    Task.prototype.setEndTime = function (endTime) {
        this.endTime = endTime;
    };
    Task.prototype.getComments = function () {
        return this.comments;
    };
    Task.prototype.setComments = function (comments) {
        this.comments = comments;
    };
    Task.prototype.isFinished = function () {
        return this.finished;
    };
    Task.prototype.setFinished = function (finished) {
        this.finished = finished;
    };
    return Task;
}());
exports.Task = Task;
