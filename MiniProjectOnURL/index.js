import http from 'http';
import url from 'url';
import fs from 'fs';


const server = http.createServer((req, res) => {

    const myurl = url.parse(req.url, true);

    const log = `${Date.now()} ${myurl.pathname}\n`;

    fs.appendFile('log.txt', log, (err, data) => {

        switch (myurl.pathname) {

            case "/":
                res.end("Welcome to Home Page")
                break;

            case "/user":
                if (myurl.search == null) {
                    let blob = fs.readFileSync('user.json', 'utf-8');
                    let data = JSON.parse(blob);


                    console.log(data);

                    res.end(JSON.stringify(data));

                }
                else {
                    // console.log(myurl.query.Id)

                    let blob = fs.readFileSync("user.json", "utf-8");
                    let data = JSON.parse(blob);

                    const queryParams = new URLSearchParams(myurl.search);

                    const id = queryParams.get("Id");

                    const user = data.find(user => user.id === id);

                    res.setHeader("Content-Type", "application/json");

                    if (user) {
                        console.log("ID:", user.id);
                        console.log("Name:", user.name);
                        console.log("Email:", user.email);

                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify(user));
                    } else {
                        res.statusCode = 404;
                        res.end(JSON.stringify({
                            message: "User not found"
                        }));
                    }
                }
                break;

            case "/search":
                if (myurl.search != null) {

                    let blob = fs.readFileSync("user.json", "utf-8");
                    let data = JSON.parse(blob);

                    const queryParams = new URLSearchParams(myurl.search);

                    console.log(queryParams);

                    const name = queryParams.get("name");

                    const user = data.find(user => user.name.toLowercase() == name.toLowercase())

                    if (user) {
                        console.log("User Found !!");
                        console.log("ID:", user.id);
                        console.log("Name:", user.name);
                        console.log("Email:", user.email);

                        res.end(JSON.stringify(user));

                    } else {
                        res.end(`User with name ${name} not found`);
                    }
                } else {
                    console.log("Enter User Name")
                    res.end(`Enter User Name`)
                }
                break;

            case "/add-user": {

                const queryParams = new URLSearchParams(myurl.search);

                const name = queryParams.get("name");
                const id = queryParams.get("Id");
                const email = queryParams.get("email");

                // Check if all fields are provided
                if (!name || !id || !email) {
                    res.statusCode = 400;
                    res.end("Please provide name, Id and email");
                    break;
                }

                // Read existing users
                let blob = fs.readFileSync("user.json", "utf-8");
                let data = JSON.parse(blob);

                // Check if ID already exists
                const existingUser = data.find(user => user.id === id);

                if (existingUser) {
                    res.statusCode = 409;
                    res.end(`User with ID ${id} already exists`);
                    break;
                }

                // Create new user
                const newUser = {
                    id: id,
                    name: name,
                    email: email
                };

                // Add user
                data.push(newUser);

                // Save updated data
                fs.writeFileSync(
                    "user.json",
                    JSON.stringify(data, null, 2)
                );

                console.log("User Added:", newUser);

                res.end("User Added Successfully");

                break;
            }

            default:
                res.end('404 not found')
        }
    })
});

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
})