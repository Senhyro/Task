"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
var uuidv4_1 = require("uuidv4");
var Environment = /** @class */ (function () {
    function Environment(title, description) {
        this.id = (0, uuidv4_1.uuid)();
        this.title = title;
        this.description = description;
        this.subjects = [];
    }
    Environment.prototype.addSubject = function (subject) {
        this.subjects.push(subject);
    };
    /* Getters & Setters */
    Environment.prototype.getTitle = function () {
        return this.title;
    };
    Environment.prototype.setTitle = function (title) {
        this.title = title;
    };
    Environment.prototype.getDescription = function () {
        return this.description;
    };
    Environment.prototype.setDescription = function (description) {
        this.description = description;
    };
    Environment.prototype.getSubjects = function () {
        return this.subjects;
    };
    Environment.prototype.setSubjects = function (subjects) {
        this.subjects = subjects;
    };
    return Environment;
}());
exports.Environment = Environment;
