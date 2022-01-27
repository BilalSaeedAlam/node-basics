const fs = require("fs");

// Read file
// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) return console.log(err);
//   console.log(data.toString());
// });

// Write File
// fs.writeFile("./docs/blog.txt", "Hello World!", (err, data) => {
//   console.log("file was written.");
// });

// Directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) return console.log(err);
//     console.log("Folder created!");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) return console.log(err);
//     console.log("Folder removed!");
//   });
// }

// deleting files
// if (fs.existsSync("./docs/blog.txt")) {
//   fs.unlink("./docs/blog.txt", (err) => {
//     if (err) return console.log(err);
//     console.log("File deleted!");
//   });
// }
