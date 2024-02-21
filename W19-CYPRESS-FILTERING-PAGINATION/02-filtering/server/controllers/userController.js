import User from "../models/User.js";

export const handleRegister = async (req, res) => {
  try {
    console.log("this is register", req.body);

    const newUser = await User.create(req.body);
    console.log("🚀 ~ newUser:", newUser);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in register:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
export const handleLogin = async (req, res) => {
  try {
    console.log("this is login", req.body);

    const user = await User.findOne({
      $or: [
        { username: req.body.emailOrUsername },
        { email: req.body.emailOrUsername },
      ],
      password: req.body.password,
    }).select("-password");
    console.log("🚀 ~ user:", user);

    if (!user) {
      return res.send({ success: false });
    }

    res.send({ success: true, user });
  } catch (error) {
    console.log("🚀 ~ error in login:", error.message);

    res.status(500).send(error.message);
  }
};

export const listAll = async (req, res) => {
  try {
    console.log("this is listAll", req.query);

    const { username, minAge, maxAge, gender } = req.query;

    let filter = {};

    if (gender.toLowerCase() !== "any") {
      filter.gender = gender.toLowerCase();
    }

    if (username) {
      filter.username = { $regex: username, $options: "i" };
    }

    filter.age = { $gte: parseInt(minAge), $lte: parseInt(maxAge) };
    // {
    //   username: { $regex: username, $options: "i" },
    //   age: { $gte: parseInt(minAge), $lte: parseInt(maxAge) },
    //   gender: gender.toLowerCase(),
    // }
    const users = await User.find(filter);
    // console.log("🚀 ~ users:", users);

    res.send({ success: true, users });
  } catch (error) {
    console.log("🚀 ~ error in list all:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const editProfile = async (req, res) => {
  try {
    console.log("this is editProfile", req.body);
    console.log("this is editProfile", req.file);

    req.body.image = req.file.path;

    const user = await User.findByIdAndUpdate(
      req.body.id,
      {
        ...req.body,
      },
      { new: true }
    );
    console.log("🚀 ~ user:", user);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in editProfile:", error.message);

    res.status(500).send(error.message);
  }
};
