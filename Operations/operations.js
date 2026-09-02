//Blocking operations
import fs from 'fs';

console.log("A");
const data = fs.readFileSync("data.txt", "utf-8");
console.log(data);
console.log("B");

//Non-Blocking operation
console.log("A");

fs.readFile("data.txt", "utf-8", (err, res) => {
    if (err) console.log(err);
    console.log(res);
})

console.log("B");

