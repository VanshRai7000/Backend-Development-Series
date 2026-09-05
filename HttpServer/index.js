import http from 'http';
import fs from 'fs';
import url from 'url';

//Create Http server
const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");
    const log = `${Date.now()} ${req.url} New User\n`;
    const myurl = url.parse(req.url, true);
    /*  console.log(myurl)
 
     console.log(myurl.query) */

    fs.appendFile('log', log, (err, data) => {

        switch (myurl.pathname) {

            case "/":
                res.end("Home page");
                break;


            case "/contact-us":
                res.end("Contact-us Page");
                break;

            case "/about-us":
                const user = myurl.query.user;
                const id = myurl.query.id;
                res.end(`User Name is ${user} and id is ${id}`)
                break;

            default:
                res.statusCode = 404;
                res.end("404 User Not-Found");
        }
    });

});

server.listen(8000, () => {
    console.log("Server is Running on " + 8000);
});



// https://www.youtube.com/watch?v=Nt-AsZh5woE&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&index=9

// https://www.youtube.com/results?search_query=node.js+tutorial+in+hindi

// https://www.youtube.com/@Wolvinnff