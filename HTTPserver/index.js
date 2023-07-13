// const { request } = require("http")

// The http.createServer() method includes request and response which is supplied by Node.js.Node
// e.g -> url, request header , and data.

// The request Object can be used to get information about the current HTTP request

// if the response object can be used to send a response for a current HTTP server is supposed to be displayed as HTMLAllCollection,

// you should include an http header with the correct content type:

const http = require("http");

const server = http.createServer((req , res) => {
    res.end("Hello from the other sides");
});

server.listen(8000, "127.0.0.1" , () => {
    console.log("listening to the port no 8000");
});