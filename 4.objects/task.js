"use strict";

function Student(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    this.marks = this.marks.concat(marksToAdd);
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length == 0) {
        return 0;
    }

    let average = this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;

    return average;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.exclude = reason;
}