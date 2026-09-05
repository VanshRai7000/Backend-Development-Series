import http from 'http';
import fs from 'fs';

//Create Http server
const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    switch (req.url) {

        case "/":
            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Home</title>
                    <style>
                        body {
                            font-family: Arial;
                            text-align: center;
                            padding: 100px;
                            background: #f8fafc;
                        }

                        h1 {
                            font-size: 50px;
                            color: #2563eb;
                        }

                        p {
                            color: #64748b;
                            font-size: 18px;
                        }

                        a {
                            display: inline-block;
                            margin: 10px;
                            padding: 12px 20px;
                            background: #2563eb;
                            color: white;
                            text-decoration: none;
                            border-radius: 8px;
                        }
                    </style>
                </head>

                <body>
                    <h1>Welcome to Home Page</h1>

                    <p>
                        Welcome to my website. This is the home page.
                    </p>

                    <a href="/about-us">About Us</a>
                    <a href="/contact-us">Contact Us</a>
                </body>
                </html>
            `);
            break;


        case "/about-us":
            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>About Us</title>

                    <style>
                        body {
                            font-family: Arial;
                            text-align: center;
                            padding: 100px;
                            background: #f8fafc;
                        }

                        h1 {
                            color: #2563eb;
                            font-size: 45px;
                        }

                        p {
                            color: #64748b;
                            font-size: 20px;
                        }

                        a {
                            display: inline-block;
                            margin-top: 20px;
                            padding: 12px 20px;
                            background: #2563eb;
                            color: white;
                            text-decoration: none;
                            border-radius: 8px;
                        }
                    </style>
                </head>

                <body>

                    <h1>About Us</h1>

                    <p>
                        Hi, I am Vansh Rai Chaudhary.
                    </p>

                    <a href="/">Home</a>
                    <a href="/contact-us">Contact Us</a>

                </body>
                </html>
            `);
            break;


        case "/contact-us":
            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Contact Us</title>

                    <style>
                        body {
                            font-family: Arial;
                            text-align: center;
                            padding: 100px;
                            background: #f8fafc;
                        }

                        h1 {
                            color: #2563eb;
                            font-size: 45px;
                        }

                        p {
                            color: #64748b;
                            font-size: 20px;
                        }

                        a {
                            display: inline-block;
                            margin-top: 20px;
                            padding: 12px 20px;
                            background: #2563eb;
                            color: white;
                            text-decoration: none;
                            border-radius: 8px;
                        }
                    </style>
                </head>

                <body>

                    <h1>Contact Us</h1>

                    <p>
                        Contact on: 7651078708
                    </p>

                    <a href="/">Home</a>
                    <a href="/about-us">About Us</a>

                </body>
                </html>
            `);
            break;


        default:
            res.statusCode = 404;

            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>404 - Page Not Found</title>

                    <style>
                        body {
                            font-family: Arial;
                            text-align: center;
                            padding: 100px;
                            background: #f8fafc;
                        }

                        h1 {
                            font-size: 100px;
                            color: #2563eb;
                            margin: 0;
                        }

                        h2 {
                            font-size: 30px;
                        }

                        p {
                            color: #64748b;
                            font-size: 18px;
                        }

                        a {
                            display: inline-block;
                            margin-top: 20px;
                            padding: 12px 20px;
                            background: #2563eb;
                            color: white;
                            text-decoration: none;
                            border-radius: 8px;
                        }
                    </style>
                </head>

                <body>

                    <h1>404</h1>

                    <h2>Page Not Found</h2>

                    <p>
                        The page you are looking for does not exist.
                    </p>

                    <a href="/">Back to Home</a>

                </body>
                </html>
            `);
    }

});

server.listen(8000, () => {
    console.log("Server is Running on " + 8000);
})
