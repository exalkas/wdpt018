import User from "../models/User.js";

export const handleRegister = async (req, res) => {
  try {
    console.log("this is register", req.body);

    const newUser = await User.create(req.body);
    console.log("🚀 ~ newUser:", newUser);

    res.send("Hello from register");
  } catch (error) {
    console.log("🚀 ~ error in register:", error.message);

    res.status(500).send(error.message);
  }
};
export const handleLogin = async (req, res) => {
  try {
    console.log("this is login", req.body);

    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    console.log("🚀 ~ user:", user);

    if (!user) {
      return res.send({ success: false });
    }

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in login:", error.message);

    res.status(500).send(error.message);
  }
};

export const listAll = async (req, res) => {
  try {
    console.log("this is listAll");

    const users = await User.find();
    console.log("🚀 ~ users:", users);

    res.send(users);
  } catch (error) {
    console.log("🚀 ~ error in list all:", error.message);

    res.status(500).send(error.message);
  }
};
