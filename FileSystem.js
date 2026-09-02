const fs = require('fs');

fs.writeFile("newfile.txt", "This is the new file.", function () {
    if (err) console.log(err);
    else console.log("Task1");
})

fs.appendFile("newfile.txt", " It contain info about Node.js", function () {
    if (err) console.log(err);
    else console.log("Task2");
})

fs.rename('newfile.txt', 'UpdatedName.txt', (err) => {
    if (err) console.log(err)
    else console.log("Rename completed")
})