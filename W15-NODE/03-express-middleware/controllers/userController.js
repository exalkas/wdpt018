import readData from "../utils/readData.js";
import writeData from "../utils/writeData.js";

export const register = (req, res) => {
  console.log("register here");

  // load the array
  const array = readData();

  // store new user to the array
  array.push(req.body);

  // store array to the file
  writeData(array);

  res.send("register ok");
};

export const login = (req, res) => {
  console.log("login here");

  const data = readData();

  const user = data.find(
    (item) =>
      item.username === req.body.username && item.password === req.body.password
  );

  if (user) {
    res.send("Log in successful");
  } else {
    res.send("login not ok");
  }
};
export const listAll = (req, res) => {
  console.log("list all here");

  const data = readData();
  res.send(data);
};

export const deleteOne = (req, res) => {
  console.log("deleteOne");

  const data = readData();

  const newData = data.filter((item) => item.username !== req.query.user);

  writeData(newData);

  res.send({ success: true, users: newData });
};
