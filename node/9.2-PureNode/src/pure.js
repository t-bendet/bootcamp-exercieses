const path = require("path");
const http = require("http");
const fs = require("fs");

//server
const server = http.createServer((req, resp) => {
  //3.
  if (req.url === "/raw-html") {
    fs.readFile("../public/raw.html", (error, pgResp) => {
      if (error) {
        resp.writeHead(404);
        resp.write("Contents you are looking are Not Found");
      } else {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(pgResp);
      }

      resp.end();
    });
  } else if (req.url === "/users") {
    fs.readFile("./data.json", (error, pgResp) => {
      if (error) {
        resp.writeHead(404);
        resp.write("Contents you are looking are Not Found");
      } else {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(pgResp);
      }

      resp.end();
    });
  } else if (req.url === "/") {
    fs.readFile("../public/index.html", "UTF-8", (error, pgResp) => {
      if (error) {
        resp.writeHead(404);
        resp.write("Contents you are looking are Not Found");
      } else {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(pgResp);
      }
      resp.end();
    });
  } else if (req.url.indexOf("css") != -1) {
    resp.writeHeader(200, { "Content-type": "text/css" });
    fs.readFile("../public/css/style.css", function (err, file) {
      if (err) throw err;
      resp.end(file);
    });
  } else if (req.url === "/index.css") {
    fs.readFile("../public/css/style.css", "UTF-8", (error, pgResp) => {
      if (error) {
        resp.writeHead(404);
        resp.write("Contents you are looking are Not Found");
      } else {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(pgResp);
      }
      resp.end();
    });
  }
});

server.listen(3000, () => {
  console.log("server is up on port 3000");
});
