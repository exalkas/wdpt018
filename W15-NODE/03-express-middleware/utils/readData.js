import fs from "fs";

export default function readData() {
  const data = fs.readFileSync("data.json", "utf8");
  console.log("🚀 ~ data:", JSON.parse(data));

  return JSON.parse(data);
}
