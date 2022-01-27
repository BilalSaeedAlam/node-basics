// Lecture 1
// Global Objects like window Object in Browser works same with or without object like global or window

// It will run for 10 seconds and then after printing Pakistan it will stop the Interval function
setTimeout(() => {
  console.log("Pakistan");
  // Get directory name and filename
  console.log("Directory", __dirname);
  console.log("File", __filename);

  clearInterval(data);
}, 10000);

var data = setInterval(() => {
  console.log("Hello world");
}, 3000);

// Import lec2 file for access array
// Object destructing
const { people, ages } = require("./modules");
console.log(people + " " + ages);

// OS library
const os = require("os");
console.log(os.platform(), os.homedir());
