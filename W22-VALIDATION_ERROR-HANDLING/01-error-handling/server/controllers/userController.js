import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../utils/sendRegisterEmail.js";
import sendForgotPassEmail from "../utils/sendForgotPassEmail.js";
import AppError from "../utils/AppError.js";

export const handleRegister = async (req, res) => {
  try {
    console.log("this is register", req.body);

    // const salt = await bcrypt.genSalt(10);
    // console.log("🚀 ~ salt:", salt);

    // SALT: $2b$10$/ss26VwsLTWYe/E0ubaLVu
    //       $2b$10$r5EqGeqlwHxO4ra37TZy/u
    // the real salt = /ss26VwsLTWYe/E0ubaLVu

    // const hash2steps = await bcrypt.hash(req.body.password, salt);
    // console.log("🚀 ~ hash:", hash2steps);
    // $2b$10$uioCIPe9GETh5nYyhddG1u
    // $2b$10$uioCIPe9GETh5nYyhddG1uWZrHDb1fzHER3aQcGW8hcdUhljUJ0aW
    // this is the hashed password: WZrHDb1fzHER3aQcGW8hcdUhljUJ0aW

    const hash = await bcrypt.hash(req.body.password, 10);
    console.log("🚀 ~ hash:", hash);
    // 🚀 ~ hash: $2b$10$rLOb9hmk7JAuQeI6woqEuuSLOMiE4g60EHbzuNrIhaujRY9N1lrxa

    req.body.password = hash;
    const newUser = await User.create(req.body);
    console.log("🚀 ~ newUser:", newUser);

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
      expiresIn: "1d",
    });

    sendMail(token, newUser.email);

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
    });
    console.log("🚀 ~ user:", user);

    if (!user) {
      return res.send({ success: false });
    }

    const passMatch = await bcrypt.compare(req.body.password, user.password);
    console.log("🚀 ~ passMatch:", passMatch);

    if (!passMatch) return res.send({ success: false });

    // create JWT
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1d",
    });
    // e.g. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGNkMTk4YjExODcwM2RmYWEyYzdiZSIsImlhdCI6MTcwOTE0MzAyNn0.lpSuht6WtTquPW4cCuhJbCIexwN8CYn8-Z-fgh2ULKs
    console.log("🚀 ~ token:", token);

    res.cookie("socialCookie", token, {
      httpOnly: true, // cookie is not accessible by JS at the client
      secure: true, // send the cookie only using https
      sameSite: "None", //
    });

    res.send({ success: true, user });
  } catch (error) {
    console.log("🚀 ~ error in login:", error.message);

    res.status(500).send(error.message);
  }
};
export const handleLoginNoCookie = async (req, res, next) => {
  try {
    console.log("this is login", req.body);

    const user = await User.findOne({
      $or: [
        { username: req.body.emailOrUsername },
        { email: req.body.emailOrUsername },
      ],
    });
    console.log("🚀 ~ user:", user);

    if (!user) throw new AppError("Wrong username or password", 403);
    // if (!user) {
    //   return res.send({ success: false });
    // }

    if (!user.verified) throw new AppError("User not verified", 401);
    // return res.send({ success: false, error: "Not verified" });

    const passMatch = await bcrypt.compare(req.body.password, user.password);
    console.log("🚀 ~ passMatch:", passMatch);

    if (!passMatch) throw new AppError("Wrong password or username", 403);
    // return res.send({ success: false });

    // create JWT
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1d",
    });

    console.log("🚀 ~ token:", token);

    res.send({ success: true, user, token });
  } catch (error) {
    console.log("🚀 ~ error in login:", error.message);
    next(error);
    // res.status(500).send(error.message);
  }
};

export const listAll = async (req, res) => {
  try {
    console.log("this is listAll", req.query);

    const { username, minAge, maxAge, gender, skip, sort } = req.query;

    let filter = {};

    if (gender.toLowerCase() !== "any") {
      filter.gender = gender.toLowerCase();
    }

    if (username) {
      filter.username = { $regex: username, $options: "i" };
    }

    // filter.age = { $gte: parseInt(minAge), $lte: parseInt(maxAge) };
    filter.age = { $gte: parseInt(minAge), $lte: parseInt(maxAge) };
    console.log("🚀 ~ filter:", filter);
    // {
    //   username: { $regex: username, $options: "i" },
    //   age: { $gte: parseInt(minAge), $lte: parseInt(maxAge) },
    //   gender: gender.toLowerCase(),
    // }
    const users = await User.find(filter)
      .limit(5)
      .skip(skip || 0)
      .sort(sort === "asc" ? "_id" : "-_id"); // _id means on field _id ascending and -_id means on field _id descending
    // console.log("🚀 ~ users:", users);

    const total = await User.countDocuments(filter);
    console.log("🚀 ~ total:", total);

    res.send({ success: true, users, total });
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
export const logout = async (req, res) => {
  try {
    console.log("this is logout", req.user);

    res.clearCookie("socialCookie");

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in logout:", error.message);

    res.status(500).send(error.message);
  }
};

export const handleEmailConfirm = async (req, res) => {
  try {
    console.log("this is handleEmailConfirm", req.params);

    const { token } = req.params;

    const decoded = jwt.verify(token, process.env.SECRET);
    console.log("🚀 ~ decoded:", decoded);

    const user = await User.findByIdAndUpdate(
      decoded.id,
      { verified: true },
      {
        new: true,
      }
    );
    console.log("🚀 ~ user:", user);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in logout:", error.message);

    res.status(500).send(error.message);
  }
};
export const handleForgotPass = async (req, res) => {
  try {
    console.log("this is handleForgotPass", req.body);

    const user = await User.findOne({
      $or: [
        { username: req.body.emailOrUsername },
        { email: req.body.emailOrUsername },
      ],
    });
    console.log("🚀 ~ user:", user);

    if (!user) return res.send({ success: false, error: "User not found" });

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1d",
    });

    sendForgotPassEmail(token, user.email);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in handleForgotPass:", error.message);

    res.status(500).send(error.message);
  }
};

export const handleChangePass = async (req, res) => {
  try {
    console.log("this is handleChangePass", req.body);

    const decoded = jwt.verify(req.body.token, process.env.SECRET);
    console.log("🚀 ~ decoded:", decoded);

    const newPass = await bcrypt.hash(req.body.password, 10);
    console.log("🚀 ~ newPass:", newPass);

    const newUser = await User.findByIdAndUpdate(
      decoded.id,
      { password: newPass },
      { new: true }
    );
    console.log("🚀 ~ newUser:", newUser);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in handleChangePass:", error.message);

    res.status(500).send(error.message);
  }
};
