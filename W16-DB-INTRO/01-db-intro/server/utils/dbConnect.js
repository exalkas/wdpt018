import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin29290:UwhG2rRi1Cv7NOxP@cluster0.y4fbcsh.mongodb.net/social?retryWrites=true&w=majority"
    );

    console.log("Connected to db");
  } catch (error) {
    console.log("🚀 ~ error connecting to db:", error.message);
  }
}
