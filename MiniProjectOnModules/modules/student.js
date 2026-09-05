import { getgrade } from './grade.js';

var StudentList = [];

export function addStudent(s, m) {
    StudentList.push({ s, m });
}

export function getAllStudents() {
    StudentList.forEach((val) => {
        const grade = getgrade(val.m);
        console.log(`Student => Name: ${val.s} | Marks: ${val.m} | Grade: ${grade}`);
    })
}

export function findStudent(name) {
    let ans = StudentList.find((val) => val.s === name)
    if (ans) {
        const grade = getgrade(ans.m);
        console.log(`Student Found => Name: ${ans.s} | Marks: ${ans.m} | Grade: ${grade}`);
    } else {
        console.log("Student Not Found");
    }
}

