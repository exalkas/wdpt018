const fs = require("fs");

const data = "hello";

fs.writeFileSync("test.html", data);
///////////////////////////

const readData = fs.readFileSync("test.html", "utf-8");
console.log("🚀 ~ readData:", readData);
