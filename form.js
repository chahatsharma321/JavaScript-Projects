const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }); // Set response header
    res.write("<h1>Hello World</h1>"); // Write content
    res.end(); // End response
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
