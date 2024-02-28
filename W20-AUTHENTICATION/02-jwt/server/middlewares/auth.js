import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  try {
    // the cookie is arriving at the header in the key cookie
    // req.cookies is an object
    const token = req.cookies.socialCookie;
    console.log("🚀 ~ auth here: token:", token);

    const decoded = jwt.verify(token, process.env.SECRET);
    console.log("🚀 ~ decoded:", decoded);

    req.user = decoded.id; // add the user id to the req object. useful for all protected requests

    next();
  } catch (error) {
    console.log("🚀 ~ error is auth:", error.message);
    return res.send({ success: false, error: error.message });
  }
}
