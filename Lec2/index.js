// Basic Server

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Request made.");
  console.log(req.url, req.method);

  // Set headers
  //   res.setHeader("Content-Type", "text/plain");
  //   res.write("Hello World!");
  //   res.end();

  // Set Html Headers
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<p>Hello World!</p>");
  //   res.end();

  // Read HTML Page from a file
  //   fs.readFile("./views/index.html", (err, data) => {
  //     if (err) return console.log(err);
  //     res.write(data);
  //     res.end();
  //   });

  // Basic Routing
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    // Redirect Source (Move page)
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) return console.log(err);
    res.write(data);
    res.end();
  });
});

server.listen(3000, "localhost", () => {
  console.log("server is running on port 3000");
});
