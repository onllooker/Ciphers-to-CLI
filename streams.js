const fs = require("fs");
const cc = require("./ceaser");
const r8 = require("./ROT8");
const at = require("./atbash");

// const readStream = fs.createReadStream("./input.txt");
// const writeStream = fs.createWriteStream("./output.txt");

// readStream.on("data", (chunk) => {
//   const op = "-c";
//   const cod = "1";
//   const decod = "0";
//   function code(a) {}
//   writeStream.write(chunk);
// });
console.log(Atbash("kmdlfkv"));
