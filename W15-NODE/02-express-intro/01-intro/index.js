import express from "express";
import { data } from "./data.js";

const app = express();
// console.log("🚀 ~ app:", app);

app.use(express.json());
app.listen(5000, () => console.log("Server is up and running!"));

const handleHealthCheck = (req, res) => {
  res.send("Status ok!");
};

app.get("/healthCheck", handleHealthCheck);
app.get("/time", (req, res) => {
  const now = new Date();
  res.send(now.toUTCString());
});

// endpoint, API
app.get("/todos/list/all", (req, res) => {
  res.send(data);
});

//query = after the question mark
app.get("/todos/list/one", (req, res) => {
  try {
    console.log("🚀 ~ req.params:", req.query);

    const response = data[req.query.id - 1];
    console.log("🚀 ~ response:", response);

    if (!response) {
      res.send("Item not found");
    } else {
      res.send(response);
    }
  } catch (error) {
    console.log("Error in /todos/all/one", error.message);
    res.send({ success: "false", error: error.message });
  }
});

// todos by user - params = get the value from the url and the key from the server path
app.get("/todos/list/byuser/:user", (req, res) => {
  try {
    console.log("🚀 ~ req.params:", req.params);

    const todos = data.filter((item) => item.assignedTo === req.params.user);
    console.log("🚀 ~ todos:", todos);

    res.send("ok");
  } catch (error) {
    console.log("Error in todos/list/byuser/:user", error.message);
    res.send({ success: "false", error: error.message });
  }
});

// create todos
app.post("/todos/add", (req, res) => {
  try {
    console.log("🚀 ~ add:", req.body);

    data.push(req.body);
    console.log("🚀 ~ data:", data);
    res.send("ok");
  } catch (error) {
    console.log("Error in todos/add", error.message);
    res.send({ success: "false", error: error.message });
  }
});

// delete todos
app.delete("/todos/delete/:id", (req, res) => {
  try {
    console.log("🚀 ~ delete:", req.params);

    data.splice(req.params.id - 1, 1);

    console.log("🚀 ~ data:", data);
    res.send("ok");
  } catch (error) {
    console.log("Error in todos/delete", error.message);
    res.send({ success: "false", error: error.message });
  }
});

// edit todos
app.put("/todos/edit/:id", (req, res) => {
  try {
    console.log("🚀 ~ edit:", req.params);
    console.log("🚀 ~ edit body:", req.body);

    const index = data.findIndex((item) => item.id == req.params.id);
    console.log("🚀 ~ index:", index);

    data[index] = { ...req.body };
    console.log("🚀 ~ data:", data);

    res.send("ok");
  } catch (error) {
    console.log("Error in todos/edit", error.message);
    res.send({ success: "false", error: error.message });
  }
});
