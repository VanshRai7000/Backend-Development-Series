import * as student from './modules/student.js'
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function inputStudent(n) {

    if (n === 0) {
        rl.question("Enter the Name to find: ", (tofind) => {
            student.findStudent(tofind);
            rl.close();
        });
        return;
    }

    rl.question("Enter Name: ", (name) => {

        rl.question("Enter Marks: ", (marks) => {

            student.addStudent(name, Number(marks));

            inputStudent(n - 1);
        });

    });
}

rl.question("Enter Number of Students: ", (n) => {
    inputStudent(Number(n));
});
