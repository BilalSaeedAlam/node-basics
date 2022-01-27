const fs = require("fs");
//Stream & Buffers (Streams => start using data, before it has finish loading.)

const readStream = fs.createReadStream("./docs/blog.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/blog1.txt");

// readStream.on("data", (chunk) => {
//   console.log("-----------NEW -----------------");
//   console.log(chunk);
//   writeStream.write(chunk);
// });

// Write data from one file to other within no time
readStream.pipe(writeStream);
