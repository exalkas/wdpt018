import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.listen(5000, () => console.log("Server is up and running!"));

async function main() {
  // Replace the following with your MongoDB deployment's connection string.
  const uri = process.env.DB_URI;
  const client = new MongoClient(
    "mongodb+srv://admin29290:UwhG2rRi1Cv7NOxP@cluster0.y4fbcsh.mongodb.net/?retryWrites=true&w=majority"
  );

  try {
    await client.connect();

    console.log("DB connected");
    await addUser(client, {
      name: "John Doe",
      email: "johndoe@example.com",
      age: 13,
      car: "mercedes",
      smoker: true,
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function addUser(client, newUser) {
  const result = await client
    .db("demomongoclient")
    .collection("users")
    .insertOne(newUser);
  console.log(`New user created with the following id: ${result.insertedId}`);
}

main().catch(console.error);
