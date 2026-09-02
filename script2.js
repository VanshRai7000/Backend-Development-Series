//Object.freeze() and Object.seal() methods in JavaScript
var obj = {
    name : "Vansh",
    age : 20,
    DOB : "2003-01-01",
}

//To freeze the object , so that we cannot modify the existing properties and cannot add new properties to it.
/* Object.freeze(obj);

//To seal the object , so that we can modify the existing properties but cannot add new properties to it.
Object.seal(obj);
 */

obj.age = 21

obj.nationality = "Indian";
obj.status = "Single"

console.log(obj);

