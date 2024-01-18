import fs from "fs";

export default function writeData(data) {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2), "utf8");
}
